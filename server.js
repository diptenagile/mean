
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// config file  
var db = require('./config/db');

//set port  

var port = process.env.PORT || 8080 ;

app.use(bodyParser.json());

app.use(bodyParser.json({type : 'application/vnd.api+json'}));

app.use(bodyParser.urlencoded({extended : true}));

app.use(methodOverride('X-HTTP-Method-Override'));

//Define public folder
app.use(express.static(__dirname + '/public'));

//Routes 
require('./app/routes')(app);

app.listen(port);

console.log('Hello Sir ! Server is running on port ' +port);

exports = module.exports = app ;