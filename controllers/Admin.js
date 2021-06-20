const BaseController = require('./Base')
const View = require('../views/Base')

module.exports = BaseController.extend({
  name: 'Admin',
  run: function (req, res, next) {
    const v = new View(res, 'admin')
    v.render({
      title: 'Administration',
      content: 'Welcome to the control panel'
    })
  }
})
