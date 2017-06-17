/**
 * Created by gohan95 on 6/8/2017.
 */
var Todo = require('./models/todo');

module.exports = function (app) {
    app.get('/api/todos', function (req, res) {
        Todo.find(function (err, todos) {
            if (err)
                res.send(err);

            res.json(todos);
        });
    });

    app.post('/api/todos', function (req, res) {
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err2, todos) {
                if (err2)
                    res.send(err2);

                res.json(todos);
            });
        });
    });

    app.delete('/api/del/:todo_id', function(req, res) {
        Todo.remove({_id: req.params.todo_id}, function (err, todo) {
            if (err)
                res.send(err);

            Todo.find(function (err2, todos) {
                if (err2)
                    res.send(err2);

                res.json(todos);
            });
        });
    });
}