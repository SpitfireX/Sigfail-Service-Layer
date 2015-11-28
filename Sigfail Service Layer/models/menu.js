var mongoose = require('mongoose');
var Dish = require('./dish.js');

var menuSchema = new mongoose.Schema({
    date: Date,
    location: string,
    dishes: [Dish]
});

module.exports = mongoose.model('Menu', menuSchema);