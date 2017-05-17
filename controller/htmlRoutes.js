var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

router.use(express.static(path.join(__dirname, '/../views/public/')));

router.get("/portfolio", function(req, res){
	res.sendFile(path.join(__dirname, '/../views/public/portfolio.html'));
});

router.get('/contact', function(req, res){
	res.sendFile(path.join(__dirname, '/../views/public/contact.html'));
});


module.exports = router;