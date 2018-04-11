//var http = require('http');

//http.createServer(function(req,res){
//	res.writeHead(200,{
//		'Content-Type' : 'text/plain'
//	});
//	res.end(''Hello world!\n');
//}).listen(3000, '127.0.0.1');

//console.log('Server running at http://127.0.0.1:3000/'); 

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var cats = require('./routes/cat.js')(app);

//app.get('/', function(req,res){
	//res.send('Hello world!\n');
	//res.json({hello:"hi"})
//});

var server = app.listen(3000, function(){
	console.log('Server running at http:127.0.0.1:3000/');
});