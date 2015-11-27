var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Kitten = require('../models/kitten');

/* GET home page. */
router.get('/', function (req, res) {
    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        
        res.render('kittens', { data: kittens });
    })
    //res.render('kittens', { data: ['test', 'test test', 'foo', 'bar'] });
});

module.exports = router;