var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('./utilities/passport.js');
var loginRouter = require('./routes/login.js');

var usersRouter = require('./routes/users');
var topicsRouter = require('./routes/topics');
var session=  require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: 'ilovethings'}));
app.use(passport.initialize());
app.use(passport.session());

// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));
//

app.get('/', function(req,res) {
  res.sendfile('client/build/index.html');
});
app.get('/login', function(req,res) {
  res.sendfile('utilities/login.html');
});
//
app.use('/static', express.static('client/build/static'))
app.use('/users', usersRouter);
app.use('/topics',topicsRouter);
app.use('/',loginRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3002, function() {
  console.log("listening on port 3002 or the heroku one ...");
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated())
  return next();
  res.redirect('/login');
}

module.exports = app;
