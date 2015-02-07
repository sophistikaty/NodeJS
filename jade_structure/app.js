var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var fs = require('fs'),
  data = "Some data I want to write to a file";

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);

app.get('/', function(req,res) {
    var user = {
        first_name: 'Stephen',
        surname: 'Hawking',
        address: 'England somewhere',
        facebook_friends:'198493'
    };
    res.render('index.jade', { title: 'User', user: user });
});


fs.writeFile('file.txt', data, function (err) {
  if (!err) {
    console.log('Wrote data to file.txt');
  } else {
    throw err;
  }
});

app.get('/about', function(req,res) {
    res.send('Hello from the about route!');
});

app.get('/contact', function(req,res) {
    res.send('Hello from the CONTACT route!');
});

app.get('/products', function(req,res) {
    res.send('Hello from the PRODUCTS route!');
});

app.get('/users/:id', function(req, res) {
    res.send('show content for user id ' + req.params.id);
});

app.post('/', function (req, res) {
    res.send(req.body);
});

app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
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


module.exports = app;
