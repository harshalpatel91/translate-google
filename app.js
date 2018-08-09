var express = require('express');
var os = require('os');
var fs = require('fs');
var app = express();
var request = require('request');
var path = require('path');
var translate = require('google-translate-api');
var port = process.env.PORT || 5000;


app.get('/translate', function(req, res) {
	
	var text = req.query.text ? req.query.text : '';
	var to = req.query.to ? req.query.to : '';
	var from = req.query.from ? req.query.from : '';
    from = from.replace(/["']/g, "");
    text = text.replace(/["']/g, "");
    to = to.replace(/["']/g, "");
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');


    translate(text, {from: from, to: to}).then(data => {
    	res.send(data);
	}).catch(err => {
	    console.error(err);
	});


});





app.listen(port);


