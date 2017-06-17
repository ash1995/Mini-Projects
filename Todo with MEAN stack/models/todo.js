/**
 * Created by gohan95 on 6/8/2017.
 */
var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    text: String,
    done: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);