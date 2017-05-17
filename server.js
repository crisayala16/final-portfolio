var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

//Allows page access to external public files
app.use(express.static(path.join(__dirname, '/views/public')));
//html routes
app.use(require('./controller/htmlRoutes.js'));

app.listen(port, function(){
	console.log('listening on port' + port);
});