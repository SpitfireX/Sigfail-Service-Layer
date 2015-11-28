var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema( {
    user: String,
    text: String,
    rating: Number,
    date: Date,
    image: { type: mongoose.Schema.ObjectId, ref: 'Image' }
});

module.exports = mongoose.model('Comment', commentSchema);