var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    location: { type: String, required: true },
    dishes: [{ type: mongoose.Schema.ObjectId, ref: 'Dish' }]
});

module.exports = mongoose.model('Menu', menuSchema);