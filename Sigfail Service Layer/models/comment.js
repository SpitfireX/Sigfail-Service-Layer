var mongoose = require('mongoose');
var Image = require('./image.js');

var commentSchema = new mongoose.Schema({
    user: String,
    text: String,
    rating: Number,
    date: Date
});

module.exports = mongoose.model('Comment', commentSchema);