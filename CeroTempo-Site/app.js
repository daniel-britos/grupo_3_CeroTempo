var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('/',(req, res) => res.sendFile(path.resolve(__dirname,'views','index.html')));
app.get('/productDetail',(req, res) => res.sendFile(path.resolve(__dirname,'views','productDetail.html')));
app.get('/productCart',(req, res) => res.sendFile(path.resolve(__dirname,'views','productCart.html')));
app.get('/login',(req, res) => res.sendFile(path.resolve(__dirname,'views','login.html')));
app.get('/register',(req, res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
app.get('/courses',(req, res) => res.sendFile(path.resolve(__dirname,'views','courses.html')));
app.get('/luthiers',(req, res) => res.sendFile(path.resolve(__dirname,'views','luthiers.html')));

<<<<<<< HEAD

app.get('/productDetail',(req, res) => res.sendFile(path.resolve(__dirname,'views','productDetail.html')));
=======
app.get('/register',(req, res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
>>>>>>> register-maria

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

module.exports = app;
