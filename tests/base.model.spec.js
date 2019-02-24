var Model = require('../models/Base');
    dbMockup = {};

describe("Models", function() {
    it("should create a new model", function(next) {
        var model = new Model(dbMockup);
        expect(model.db).toBeDefined();
        expect(model.extend).toBeDefined();
        next();
    });
    it("should be extendable", function() {
        var model = new Model(dbMockup);
        var otherTypeOfModel = model.extend({
            myNewMethod: function() {}
        });
        var model2 = new otherTypeOfModel(dbMockup);
        expect(model2.db).toBeDefined();
        expect(model2.myNewMethod).toBeDefined();
    });
});