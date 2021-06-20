const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.locals.errors = req.flash('error')
  res.render('login', { title: 'Euge Node' })
})

module.exports = router
