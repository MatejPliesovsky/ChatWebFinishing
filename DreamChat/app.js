 ﻿var express = require('express');
var path = require('path');
global.appRoot = path.resolve(__dirname);
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

users = {};



var routes = require('./routes/index');
var test = require('./routes/test');
var login = require('./routes/login');
var register = require('./routes/register');
var requests = require('./routes/requests');
var users = require('./routes/users');
var contacts = require('./routes/contacts');


var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
const PORT = process.env.PORT || 1337;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});


app.listen(PORT, function (){
  console.log('Server is Up on Port ' + PORT);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('./views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/test', test);
app.use('/login', login);
app.use('/register', register);
app.use('/requests', requests);
app.use('/users', users);
app.use('/contacts', contacts);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

io.sockets.on('connection', function(socket){
    socket.on('new user',function (data,callback) {
        if(data in users){
            callback(false);
        }else{
            callback(true);
            socket.nickname = data;
            users[socket.nickname] = socket;
            updateNicknames();
        }
    });

    function updateNicknames(){
        io.sockets.emit('usernames', Object.keys(users));
    }

    // Send Message
    socket.on('send message', function(data, callback){
        var msg = data.trim();
        if(msg.substr(0,3) === '/w '){
            msg = msg.substr(3);
            var ind = msg.indexOf(' ');
            if(ind !== -1){
                var name = msg.substr(0,ind);
                var msg = msg.substr(ind + 1);
                if(name in users){
                    users[name].emit('whisper', {msg: msg, nick: socket.nickname});
                    console.log(msg);
                }else{
                    callback('This user does not exist.');
                }
            }else{
                callback('Error! please enter a message for your whisper.');
            }
        }else{
            io.sockets.emit('new message', {msg: msg, nick: socket.nickname});
        }
    });

    //disconnect
    socket.on('disconnect', function(data){
        if(!socket.nickname) return;
        delete users[socket.nickname];
        updateNicknames();
    });
});

module.exports = app;

//TESTING BELOW THIS LINE
