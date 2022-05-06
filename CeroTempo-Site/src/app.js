var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
<<<<<<< HEAD:CeroTempo-Site/src/app.js
app.set('views', path.join(__dirname, 'views')); // lo escribimos asi para usar sub carpetas
=======
app.set('views', path.join(__dirname, '/views/')); // lo escribimos asi para usar sub carpetas
>>>>>>> register-maria:CeroTempo-Site/app.js
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..' ,'public')));
<<<<<<< HEAD:CeroTempo-Site/src/app.js
app.use(methodOverride('_method'));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); 

=======

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); // http://localhost:3000/products/productCart
>>>>>>> register-maria:CeroTempo-Site/app.js

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
