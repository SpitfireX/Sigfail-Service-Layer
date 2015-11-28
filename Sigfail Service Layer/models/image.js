var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    user: String,
    path: String,
    date: Date
});

module.exports = mongoose.model('Image', imageSchema);