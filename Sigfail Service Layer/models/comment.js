var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema( {
    user: { type: String, required: true },
    text: { type: String, required: true },
    rating: Number,
    date: { type: Date, default: Date.now },
    image: { type: mongoose.Schema.ObjectId, ref: 'Image' }
});

module.exports = mongoose.model('Comment', commentSchema);