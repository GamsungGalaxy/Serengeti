const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
  condition: {
    type: String,
  },
  userID: {
    type: String,
  },
});

module.exports = mongoose.model('Records', recordSchema);
