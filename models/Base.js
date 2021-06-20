module.exports = function (db) {
  this.db = db
}
module.exports.prototype = {
  extend: function (properties) {
    const child = module.exports
    child.prototype = module.exports.prototype
    for (const key in properties) {
      child.prototype[key] = properties[key]
    }
    return child
  }
}
