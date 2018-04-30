var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('post1'); // renders /views/about.hbs
});

module.exports = router;
