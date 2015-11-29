var mongoose = require('mongoose');
var Comment = require('./comment.js');
var Image = require('./image.js');

var dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: Number,
    prices: {
        student: { type: Number, required: true },
        employee: { type: Number, required: true },
        guest: { type: Number, required: true }
    },
    comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
    images: [{ type: mongoose.Schema.ObjectId, ref: 'Image' }]
});

module.exports = mongoose.model('Dish', dishSchema);