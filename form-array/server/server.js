let express = require('express')
let logger = require('morgan')
let bodyParser = require('body-parser')
let cors = require('app/helpers/cors')
let app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Allow CORS
app.use(cors)

// App Router
app.use(require('app/router'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
    .json({
      success: false,
      message: err.message
  });
});

module.exports = app;
