var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
    date: Date,
    location: string,
    dishes: [{ type: mongoose.Schema.ObjectId, ref: 'Dish' }]
});

module.exports = mongoose.model('Menu', menuSchema);