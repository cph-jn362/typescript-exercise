"use strict";
exports.__esModule = true;
exports.Present = exports.PresentType = void 0;
var PresentType;
(function (PresentType) {
    PresentType[PresentType["SOFT"] = 0] = "SOFT";
    PresentType[PresentType["HARD"] = 1] = "HARD";
})(PresentType = exports.PresentType || (exports.PresentType = {}));
;
var Present = /** @class */ (function () {
    function Present(name, weight, presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    Present.prototype.getPresentType = function () {
        return this.presentType;
    };
    Present.prototype.getWeight = function () {
        return this.weight;
    };
    Present.prototype.print = function () {
        console.log(this.name + " " + this.weight + " " + this.presentType);
    };
    return Present;
}());
exports.Present = Present;
