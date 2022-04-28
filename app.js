var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = new express();
var http = require('http').createServer(app)
var io = require('socket.io')(http)
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var driverRouter = require('./routes/driver');

mongoose.connect('mongodb://localhost/muber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
io.on('connect', function(client){
    console.log('socket opened....');
    client.on('message', function(data){
        io.sockets.emit('all', data);
    });

});

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html');
  })

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// indexRouter(app);
// driverRouter(app);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use((err, req, res, next)=>{
    res.status(422).send({error: err.message});
});
http.listen(3000);
module.exports = app;
