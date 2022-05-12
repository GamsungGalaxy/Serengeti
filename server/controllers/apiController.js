const axios = require('axios');
const Record = require('../models/recordModels');
const apiController = {};

// looks up release, stores it in user database
<<<<<<< HEAD
apiController.findRecord = async (req, res, next) => {
  console.log('req.body is: ', req.body);
  try {
    // console.log(res);
    // out of request, extract release number and user id
    // verifying object has property
    const release = req.body.release;
    const condition = req.body.condition;
    const userID = '1';
    console.log('Release number is: ', release);
    // will be sanitized on front end
    // verify that string is correct format (13 characters long)
    // const userID = res.body.userID;
    // insert it into 3rd party api call
    // fetch/axios
=======
apiController.addRecord = async (req, res, next) => {
  console.log(req.body);
  try {
    // extract data out of request
    const { release, condition, userID } = req.body;
    // const userID = '1';

    // look up release
>>>>>>> dev
    const response = await axios.get(
      `https://api.discogs.com/releases/${release}`,
      { headers: { 'User-Agent': 'serengeti/0.1.1' } }
    );
<<<<<<< HEAD
    console.log('Response is: ', response);
=======
    // extract data out of api response
>>>>>>> dev
    const artistInfo = response.data;
    const { title, year } = artistInfo;
    const artist = artistInfo.artists[0].name;

<<<<<<< HEAD
    res.locals.data = { artist, title, year };
    
=======
    // add data to our database
>>>>>>> dev
    const data = await new Record({
      artist,
      title,
      year,
      condition,
      userID,
    });
<<<<<<< HEAD
    
    data.save((err, record) => console.log('Record successfully saved!'));
=======
    data.save((err, record) => console.log('record saved!'));

    // attach data to server response to send to client
    res.locals.data = { artist, title, year, userID };

>>>>>>> dev
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
