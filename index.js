var express = require('express'),
	router = require('./router'),
	db = require('./lib/db');



var app = express();
app.use(express.static('public'));
db();

var server = app.listen(3333, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Listening at http://%s:%s", host, port);
})