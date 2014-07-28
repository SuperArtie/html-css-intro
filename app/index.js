'use strict';

var express = require('express');
var app = express();//allows node to talk to a browser
var morgan = require('morgan');

app.set('views', __dirname + '/views');//looks inside view folder
app.set('view engine', 'ejs');

app.use(morgan('dev'));//outputs log on the server

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('index');//finds 'index' in the views folder
});

app.get('/dogs', function(req, res){
  res.render('dogs');//finds 'dogs' in the views folder
});

app.get('/cats', function(req, res){
  res.render('cats');//finds 'cats' in the views folder
});

app.get('/ninjas', function(req, res){
  res.render('ninjas');//finds 'ninjas' in the views folder
});

app.get('/pirates', function(req, res){
  res.render('pirates');//finds 'pirates' in the views folder
});

app.listen(3000, function(){
  console.log('express.js is listening...');
});

