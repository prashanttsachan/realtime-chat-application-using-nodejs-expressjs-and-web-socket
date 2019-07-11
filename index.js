var pug = require('pug');
var express=require('express');
var app=express();
app.set('view engine','pug');
app.set('views','./views');

app.get('/:page', function (req, res) {
	// var page=req.params.page;
	res.render(req.params.page, { title: 'Hey', message: 'Hello there!' })
});

app.listen(8080);