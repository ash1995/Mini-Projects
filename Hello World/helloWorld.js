var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
app.listen(80);

app.get('/', function (req, res) {
    res.send('Hello World\n');
});
