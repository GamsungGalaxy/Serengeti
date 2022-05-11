const express = require('express');
const router = express.Router();

const dbController = require('../controllers/dbController');
const apiController = require('../controllers/apiController');
const userController = require('../controllers/userController');


router.get('/findBook', apiController.findBook, (req, res) => {
  /*apiController.findAuthor,*/ 
  return res.status(200).json(res.locals);
});

// input is JSON object that must include { "isbn": "9780060244194"}
router.post('/addOldBook', dbController.findBook, apiController.findBook, apiController.findAuthor, dbController.addBook, dbController.addOldBook, (req, res) => {
  return res.status(200).json(res.locals);
});

router.post('/findOldBook', dbController.findOldBook, (req, res) => {
  return res.status(200).json(res.locals.oldbooks);
});

//interactions in MyPage
router.post('/deleteOldBook', dbController.deleteOldBook, (req, res) => {
  return res.status(200).send(req.body.myOldBookId);
});

router.get('/getMyOldBookList', dbController.findMyBookList, (req, res) => {
  return res.status(200).json(res.locals.mybooks);
});





module.exports = router;