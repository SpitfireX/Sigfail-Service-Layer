﻿var mongoose = require('mongoose');
var Comment = require('./comment.js');
var Image = require('./image.js');

var dishSchema = new mongoose.Schema({
    name: String,
    location: String,
    rating: Number,
    prices: {
        student: Number,
        employee: Number,
        guest: Number
    },
    comments: [Comment.schema],
    images: [Image.schema]
});

module.exports = mongoose.model('Dish', dishSchema);