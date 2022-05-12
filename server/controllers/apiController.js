const axios = require('axios').default;
const Record = require('../models/recordModels');
const apiController = {};

// looks up release, stores it in user database
apiController.addRecord = async (req, res, next) => {
  console.log(req.body);
  try {
    // extract data out of request
    const { release, condition, userID } = req.body;
    // const userID = '1';

    // look up release
    const response = await axios.get(
      `https://api.discogs.com/releases/${release}`,
      { headers: { 'User-Agent': 'serengeti/0.1.1' } }
    );
    // extract data out of api response
    const artistInfo = response.data;
    const { title, year } = artistInfo;
    const artist = artistInfo.artists[0].name;

    // add data to our database
    const data = await new Record({
      artist,
      title,
      year,
      condition,
      userID,
    });
    data.save((err, record) => console.log('record saved!'));

    // attach data to server response to send to client
    res.locals.data = { artist, title, year, userID };

    return next();
  } catch (err) {
    return next({
      log: 'ERROR found in apiController.addRecord',
      status: 500,
      message: { err: err },
    });
  }
};

// retrieves users record collection
apiController.getCollection = async (req, res, next) => {
  try {
    // inspect request
    const { userID } = req.body;
    // const userID = '1';

    // send request to db
    const dbResponse = await Record.find({ userID });
    // attach db response to user response
    res.locals = dbResponse;
    return next();
  } catch (err) {
    return next({
      log: 'Error found in apiController.getCollection',
      status: 500,
      message: { err: err },
    });
  }
};

module.exports = apiController;
