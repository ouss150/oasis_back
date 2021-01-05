require("dotenv").config();
require("./config/mongo");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const morgan = require("morgan");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lieuRouter = require('./routes/lieu');
var activiteRouter = require('./routes/activite');
var voyageRouter = require('./routes/voyage');
var reservationRouter = require('./routes/reservation');

var app = express();
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    saveUninitialized: true,
    resave: false,
  })
);

// view engine setup
//  app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.use(cors('*'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lieus', lieuRouter);
app.use('/reservation', reservationRouter);
app.use('/voyage', voyageRouter);
app.use('/activite', activiteRouter);
app.use('/auth', require('./routes/auth'));
app.use('/commentaire', require('./routes/commentaire'));
app.use('/article', require('./routes/article'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
