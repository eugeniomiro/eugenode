describe('configuration setup', function () {
  it('should load local configurations', function (next) {
    const config = require('../config')()
    expect(config.mode).toBe('local')
    next()
  })
  it('should load staging configurations', function (next) {
    const config = require('../config')('staging')
    expect(config.mode).toBe('staging')
    next()
  })
  it('should load production configurations', function (next) {
    const config = require('../config')('production')
    expect(config.mode).toBe('production')
    next()
  })
})
