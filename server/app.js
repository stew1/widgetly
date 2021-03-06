var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var widgetsRouter = require('./routes/widgets');
var categoriesRouter = require('./routes/categories');
var ordersRouter = require('./routes/orders');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
console.log(__dirname);
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(function(req, res, next) {
  res.locals.connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
    connectionLimit: 10,
  });
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/widgets', widgetsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/orders', ordersRouter);

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
