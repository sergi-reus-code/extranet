/**
 * MODULOS
 */

//https://www.npmjs.com/package/http-errors
var createError = require('http-errors');

//https://www.npmjs.com/package/express
var express = require('express');

//https://nodejs.org/api/path.html
var path = require('path');

//https://www.npmjs.com/package/cookie-parser
var cookieParser = require('cookie-parser');

//https://www.npmjs.com/package/morgan
var logger = require('morgan');



const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
//const _ = require('lodash');


















//Modulos de las rutas
var mainRouter = require('./routes/main');
var logRouter = require('./routes/log');
var tareasRouter = require('./routes/tareas');
var apiRouter = require('./routes/api');
var errorRouter = require('./routes/error');

// Servidor Express
var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//express server config

// enable files upload
app.use(fileUpload({  createParentPath: true}));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//express endpoints
app.use('/', mainRouter);
app.use('/login', logRouter);
app.use('/tareas', tareasRouter);
app.use('/error', errorRouter);

//api endpoints
app.use('/api', apiRouter);


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
  res.render('./main/error');
});

module.exports = app;
