module.exports = function(response, template) {
    this.response = response;
    this.template = template;
};
module.exports.prototype = {
    extend: function(properties) {
        var child = module.exports;
        child.prototype = module.exports.prototype;
        for(var key in properties) {
            child.prototype[key] = properties[key];
        }
        return child;
    },
    render: function(data) {
        if (this.response && this.template) {
            this.response.render(this.template, data);
        }
    }
}