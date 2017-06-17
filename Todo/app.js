/**
 * Created by gohan95 on 6/1/2017.
 */
var express = require('express');
var http = require('http');
var routes = require('./routes/index.js');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var server = http.createServer(app);
app.listen(3005);

app.get('/*', routes);
app.post('/save', routes);