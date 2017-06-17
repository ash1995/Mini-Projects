/**
 * Created by gohan95 on 6/1/2017.
 */
var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient();

router.get('/', function (req, res) {
    res.render('home', {name : 'Ashwin'});
});

router.get('/todo', function (req, res) {
    var todos = [];
    client.hgetall("Todo", function (err, obj) {
        for (var i in obj) {
            var newTodo = {
                text: obj[i]
            };

            todos.push(newTodo);
        }

        console.log(todos);
        res.render('todo', {todos: todos});
    });
});

router.post('/save', function (req, res, next) {
    var newTodo = {};
    console.log(req.body);
    newTodo.name = req.body.item;
    newTodo.id = newTodo.name.replace(" ", "-");
    client.hset("Todo", newTodo.id, newTodo.name);
    res.redirect('/todo');
});

module.exports = router;