var mongoose = require('mongoose');

var book = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean }
});

module.exports = mongoose.model('book', book);
