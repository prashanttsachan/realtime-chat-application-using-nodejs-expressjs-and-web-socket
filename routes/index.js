var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:page', function(req, res, next) {
	res.render(req.parse.page, {title: "User account" })
	//res.send('Hello');
});

module.exports = router;
