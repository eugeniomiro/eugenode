var BaseController = require('../controllers/Base');

describe("Base controller", function() {
    it("should have a method extend which returns a child instance", function(next) {
        expect(BaseController.extend).toBeDefined();
        var child = BaseController.extend({ name: "my child controller" });
        expect(child.run).toBeDefined();
        expect(child.name).toBe("my child controller");
        next();
    });
});