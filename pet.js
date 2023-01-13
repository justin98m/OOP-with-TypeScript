"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pet = /** @class */ (function () {
    function Pet(name, weight, color) {
        this._name = name;
        this._weight = weight;
        this._color = color;
    }
    Object.defineProperty(Pet.prototype, "weight", {
        //encap
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Pet.prototype.displayInfo = function () {
        console.log("".concat(this.name, " is the color ").concat(this._color) +
            "and weighs ".concat(this.weight, " lbs"));
    };
    Pet.prototype.sayHello = function () { };
    Pet.prototype.threaten = function () { };
    return Pet;
}());
exports.default = Pet;
var pet1 = new Pet("rufus", 12, "blonde");
pet1.displayInfo();
pet1.weight = 15;
pet1.displayInfo();
var pet2 = new Pet('Brian', 23, 'white');
pet2.displayInfo();
pet2.weight = 18;
pet2.displayInfo();
