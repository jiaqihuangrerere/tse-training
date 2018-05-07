var express = require('express');
var router = express.Router();

var data = require('../chirps.json');

var template = $('#handlebars-sprint-3').html();

var html = templateScript(data);

$(document.body).append(html);

router.get('/', function(req, res, next) {
	res.render('index', data);
});

module.exports = router;
