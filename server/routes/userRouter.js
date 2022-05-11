const express = require('express');
const router = express.Router();

const dbController = require('../controllers/dbController');
const apiController = require('../controllers/apiController');
const userController = require('../controllers/userController');

//interactions in Register
router.post('/register', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.get('/verifyUser', userController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

///temp stuff
const db = require('../models/booksModels');
router.get('/seeuser', (req, res) => {
  const query = `SELECT * FROM users`;
  // make a request to db 
  // working with the entier table in order to find an attribute
  db.query(query)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err)
    });
  return res.status(200).json({ msg: 'hhihi' });
});

module.exports = router;