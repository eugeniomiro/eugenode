const Model = require('../models/Base')
const dbMockup = {}

describe('Models', function () {
  it('should create a new model', function (next) {
    const model = new Model(dbMockup)
    expect(model.db).toBeDefined()
    expect(model.extend).toBeDefined()
    next()
  })
  it('should be extendable', function () {
    const model = new Model(dbMockup)
    const OtherTypeOfModel = model.extend({
      myNewMethod: function () {}
    })
    const model2 = new OtherTypeOfModel(dbMockup)
    expect(model2.db).toBeDefined()
    expect(model2.myNewMethod).toBeDefined()
  })
})
