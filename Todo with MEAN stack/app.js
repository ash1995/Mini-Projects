/**
 * Created by gohan95 on 6/8/2017.
 */
//Set-up
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var database = require('./config/database');
var port = process.env.port || 3005;

//Configuration
mongoose.connect(database.url, function (err, db) {
    if (err)
        console.log(err);
    else
        console.log("Successfully connected to the database !!!");
});

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));

//routes
require('./routes.js')(app);

//listen
app.listen(port);
console.log("App listening on port: " + port);
