var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Define routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});
app.get('/movies', (req, res) => {
  res.render('movies', { title: 'Movies' });
});
app.get('/tv_shows', (req, res) => {
  res.render('tvshows', { title: 'TV Shows' });
});
app.get('/search_results', (req, res) => {
  res.send('Search results');
});

app.get('/movies/:id', (req, res) => {
  res.send('Movie details page');
});
app.get('/tv_shows/:id', (req, res) => {
  res.send('TV Show details page');
});

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

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = app;
