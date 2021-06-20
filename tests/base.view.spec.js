const BaseView = require('../views/Base')

describe('Base view', function () {
  it('creates and renders new view', function (next) {
    const responseMockup = {
      render: function (template, data) {
        expect(data.myProperty).toBe('value')
        expect(template).toBe('template-file')
        next()
      }
    }
    const v = new BaseView(responseMockup, 'template-file')
    v.render({ myProperty: 'value' })
  })
  it('should be extendable', function (next) {
    const v = new BaseView()
    const OtherView = v.extend({
      render: function (data) {
        expect(data.prop).toBe('yes')
        next()
      }
    })
    const otherViewInstance = new OtherView()
    expect(otherViewInstance.render).toBeDefined()
    otherViewInstance.render({ prop: 'yes' })
  })
})
