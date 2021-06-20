// see: http://www.passportjs.org/docs/configure/

const LocalStrategy = require('passport-local').Strategy

module.exports = function (passport) {
  passport.use(new LocalStrategy({
    passReqToCallBack: true
  }, function (username, password, done) {
    if (username !== 'Eugenio') {
      return done(null, false, { message: 'Sorry, only Eugenio may login' })
    }
    if (password !== 'eugepwd') {
      return done(null, false, { message: 'password was wrong, are you Eugenio?' })
    }
    return done(null, { username: username })
  }))

  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })
}
