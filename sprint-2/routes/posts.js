var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('posts'); // renders /views/about.hbs
});

module.exports = router;
