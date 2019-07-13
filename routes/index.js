var express 		= require('express');
var router 			= express.Router();

var mysql           = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chatapp"
});
con.connect(function (err) {
    if (err) console.log(err);//throw err;
    else console.log("Connected!");
});

/* GET home page. */
router.get('/:page', function(req, res, next) {
	res.render(req.parse.page, {title: "User account"})
	//res.send('Hello');
});

module.exports = router;
