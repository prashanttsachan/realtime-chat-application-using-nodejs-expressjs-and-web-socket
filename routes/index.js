var express 		= require('express');
var router 			= express.Router();
var con				= require('../database/db');
var bodyParser      = require('body-parser');
var session 		= require('express-session');
router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({ extended: true}));
router.use(session({secret: "ChatApp!"}));


router.get('/:page', function(req, res, next) {
	var page = req.params.page;
	if (page == 'message')
		authenticate(req , res);
	else if (page == 'logout') {
		delete req.session.user;
		res.redirect('/login');
	} else 
		res.render(page, {page: 'Users Page', title: "New User registration" });
});
router.post('/login', function(req, res, next) {
	var data 		= req.body;
	var email  		= data.email;
	var sql = "SELECT * FROM users WHERE email='" + email +"'";
	con.query(sql, function (err, result, fields)  {
		if (err) throw err;
		var jsonString = JSON.stringify(result); 
		var jsonData = JSON.parse(jsonString);
		if(jsonData[0].email) {
			req.session.user = jsonData[0].email;
			res.redirect("/message");
		} else {
			res.redirect("/login");
		}
	});
});

function authenticate(req,res){
    if (!req.session.user) {
        res.redirect("/login");
    }
}
module.exports = router;
