var express   = require('express');
var router    = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.errors = req.flash('error');
  console.log(res.locals.errors);
  res.render('login', { title: 'Euge Node' });
});

module.exports = router;