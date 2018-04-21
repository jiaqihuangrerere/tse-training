var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/post1', function(req, res, next) {
	res.render('post1');
});

module.exports = router;
