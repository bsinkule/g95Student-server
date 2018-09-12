const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const g95Info = require('./router/g95Info')


const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/g95', g95Info)

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.statusCode || 500);
  res.json({
      message: err.message,
      stack: req.app.get('env') === 'development' ? err.stack : {}
  })
})

module.exports = app;
