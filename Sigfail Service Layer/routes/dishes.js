var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Dish = require('../models/dish');
var Comment = require('../models/comment');
var Image = require('../models/image');

router.get('/', function (req, res) {
    Dish
    .find()
    .populate('comments images')
    .exec(function (err, dishes) {
        if (err) {
            res.status(404);
            res.json(err);
            return console.error(err);
        }
        res.json(dishes);
    });
});

router.get('/:dish_id', function (req, res) {
    Dish
    .findById(req.params.dish_id)
    .populate('comments images')
    .exec(function (err, dish) {
        if (err) {
            res.status(404);
            res.json({ message: "Invalid ID" });
            return console.error(err);
        } else if (dish === null) {
            res.status(404);
            res.json({ message: 'ID not found' });
            return
        }
        res.json(dish);
    });
});

router.delete('/:dish_id', function (req, res) {
    Dish.findByIdAndRemove(req.params.dish_id, function (err, dish) {
        if (err) {
            res.status(404);
            res.json({ message: "Invalid ID" });
            return console.error(err);
        } else if (dish === null) {
            res.status(404);
            res.json({ message: 'ID not found' });
            return
        }
        res.json({ message: 'Successfully deleted' });
    });
});

router.put('/:dish_id', function (req, res) {
    delete req.body._id;
    delete req.body.__v;

    Dish.findById(req.params.dish_id, function (err, dish) {
        if (err) {
            res.status(404);
            res.json({ message: "Invalid ID" });
            return console.log(err);
        } else if (dish === null) {
            res.status(404);
            res.json({ message: 'ID not found' });
            return
        }

        for (n in req.body) {
            dish[n] = req.body[n];
        }

        dish.save(function (err, dish) {
            if (err) {
                res.status(404);
                res.json({ message: "Invalid Schema" });
                return console.log(err);
            }

            res.json({
                message: 'Success',
                newObject: dish
            });
        });
    });
});

router.post('/', function (req, res) {
    delete req.body._id;
    delete req.body.__v;
    
    newDish = new Dish(req.body);
    newDish.save(function (err, dish) {
        if (err) {
            res.status(404);
            res.json({ message: "Invalid Schema" });
            return console.log(err);
        }
        
        res.location('/' + dish._id + '/');
        res.status(201);
        res.json({
            message: 'Success',
            newObject: dish
        });
    });
});

module.exports = router;
