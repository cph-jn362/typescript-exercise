"use strict";
exports.__esModule = true;
exports.Sled = void 0;
var Sled = /** @class */ (function () {
    function Sled(bagInventory) {
        this.bagInventory = [];
    }
    Sled.prototype.addBag = function (bag) {
        this.bagInventory.push(bag);
    };
    return Sled;
}());
exports.Sled = Sled;
