const createErrors  = require('http-errors');
const express       = require('express');
const logger        = require('morgan');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const indexRouter   = require('./routes/index');
const usersRouter   = require('./routes/users');
const loginRouter   = require('./routes/login');

const app           = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',      indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use(function(req, res, next) {
    next(createErrors(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;