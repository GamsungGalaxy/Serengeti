const express = require('express');
const router = express.Router();

const dbController = require('../controllers/dbController');
const apiController = require('../controllers/apiController');
const userController = require('../controllers/userController');

/**
 *  /api/book/findBook
 * PURPOSE:
 * 3rd party API call to retrieve all of the book's information
 * we will use just title, author, isbn and genre(?)
 *
 * for now, we will just return this object as a JSON as a response
 */
router.get('/getMyCollection', apiController.getCollection, (req, res) => {
  return res.status(200).json(res.locals);
});

router.post('/addRecordByRelease/', apiController.addRecord, (req, res) => {
  return res.status(200).json(res.locals);
});

// input is JSON object that must include { "isbn": "9780060244194"}
// router.post(
//   '/addOldBook',
//   dbController.findBook,
//   apiController.findBook,
//   apiController.findAuthor,
//   dbController.addBook,
//   dbController.addOldBook,
//   (req, res) => {
//     return res.status(200).json(res.locals);
//   }
// );

// router.post('/findOldBook', dbController.findOldBook, (req, res) => {
//   return res.status(200).json(res.locals.oldbooks);
// });

// //interactions in MyPage
// router.post('/deleteOldBook', dbController.deleteOldBook, (req, res) => {
//   return res.status(200).send(req.body.myOldBookId);
// });

// router.get('/getMyOldBookList', dbController.findMyBookList, (req, res) => {
//   return res.status(200).json(res.locals.mybooks);
// });

module.exports = router;
