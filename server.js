var express 		= require('express');
var path 			= require('path');
//var logger 			= require('morgan');
//var cookieParser 	= require('cookie-parser');
//
//var connect 		= require('connect');
//var methodOverride 	= require('method-override');
var app 			= express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var routes 			= require('./routes/index');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(8081, () => {
  console.log('App was created by Prashant Sachan and Server is running on 8081 port.');
});
module.exports = app;