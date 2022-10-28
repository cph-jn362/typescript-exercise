"use strict";
exports.__esModule = true;
exports.Bag = exports.BagType = void 0;
var BagType;
(function (BagType) {
    BagType[BagType["PAPER"] = 0] = "PAPER";
    BagType[BagType["CANVAS"] = 1] = "CANVAS";
})(BagType = exports.BagType || (exports.BagType = {}));
;
var total = 0;
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    Bag.prototype.addPresent = function (present) {
        this.presents.push(present);
    };
    Bag.prototype.totalWeight = function () {
        var w1 = this.presents[0].weight;
        var w2 = this.presents[1].weight;
        return w1 + w2;
        // this.presents.forEach(item => {
        //     let total = 0;
        //     return total += item.weight;
        // })
    };
    Bag.prototype.print = function () {
        console.log("This bag has a max weight of: " + this.maxWeight + " and is of type " + this.bagType);
    };
    return Bag;
}());
exports.Bag = Bag;
