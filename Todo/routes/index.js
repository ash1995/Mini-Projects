/**
 * Created by gohan95 on 6/1/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {name : 'Ashwin'});
});

router.get('/todo', function (req, res) {
    res.render('todo', {});
});

module.exports = router;