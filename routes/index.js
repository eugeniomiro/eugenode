var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let passport = req.session.passport;
  if (passport && passport.user && passport.user.username)
    res.render('index', { title: 'Euge Node', user: passport.user.username });
  else
    res.render('index', { title: 'Euge Node' });
});

module.exports = router;