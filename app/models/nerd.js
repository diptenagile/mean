 // app database model stores here

 var mongoose = require('mongoose');

 module.exports = mongoose.model('Nerd',{

 	name: {type: String, default:''},
 	age : {type: Number, default:0}

 });