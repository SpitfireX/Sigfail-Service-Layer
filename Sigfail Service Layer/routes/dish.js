var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Dish = require('../models/dish');
var Comment = require('../models/comment');
var Image = require('../models/image');

/* GET home page. */
router.get('/', function (req, res) {
    var testComment = new Comment({
        user: 'Hans',
        text: 'test lol',
        rating: 5.5,
        date: Date.now()
    });

    var newDish = new Dish({
        name: 'Swagetti Yolonaise',
        location: 'Südmensa Erlangen',
        rating: 5.5,
        prices: {
            student: 1,
            employee: 2,
            guest: 3
        }
    });
    
    newDish.comments.push(testComment._id);
    
    testComment.save(function (err, fluffy) {
        if (err) return console.error(err);
    });

    newDish.save(function (err, fluffy) {
        if (err) return console.error(err);
    });

    Dish
    .find()
    .populate('comments')
    .exec(function (err, dishes) {
        if (err) return console.error(err);
        res.render('array_view', { title: 'Dishes', data: dishes });
    });
});

module.exports = router;