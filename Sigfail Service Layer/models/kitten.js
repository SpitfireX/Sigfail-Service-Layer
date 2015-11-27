var mongoose = require('mongoose');

var kittenSchema = new mongoose.Schema({
    name: String
});

kittenSchema.methods.speak = function () {
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
}

module.exports = mongoose.model('Kitten', kittenSchema);