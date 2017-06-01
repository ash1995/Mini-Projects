/**
 * Created by gohan95 on 6/1/2017.
 */
var express = require('express');
var http = require('http');
var routes = require('./routes/index.js');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var server = http.createServer(app);
app.listen(3005);

app.get('/', routes);