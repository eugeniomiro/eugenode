const createErrors = require('http-errors')
const express = require('express')
const session = require('express-session')
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const flash = require('connect-flash')
const config = require('./config')()
const configPassport = require('./config/passport')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const Admin = require('./controllers/Admin')

const app = express()

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.use(session(
  { secret: 'thesecret123451234', resave: false, saveUninitialized: true }
))
app.use(logger(config.logging))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(flash())
app.use(express.static(path.join(__dirname, 'public')))

configPassport(passport)

app.use(passport.initialize())

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))
app.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

module.exports = function (attachDb) {
  app.use('/', attachDb, indexRouter)
  app.use('/users', attachDb, usersRouter)
  app.use('/login', attachDb, loginRouter)
  app.all('/admin*', attachDb, function (req, res, next) {
    Admin.run(req, res, next)
  })
  app.use(function (req, res, next) {
    next(createErrors(404))
  })

  app.use(function (err, req, res, next) {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
  })

  return app
}
