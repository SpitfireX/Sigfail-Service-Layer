var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var path = req.baseUrl.split('/');
    date = new Date();
    date.setFullYear(parseInt(path[1]), parseInt(path[2])-1, parseInt(path[3]));

    console.log(path);
    console.log(date);
    res.render('index', { title: date.toDateString() });
});

module.exports = router;