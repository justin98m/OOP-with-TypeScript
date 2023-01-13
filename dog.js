"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pet_js_1 = require("./pet.js");
//inheritance
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(dogInfo) {
        return _super.call(this, dogInfo.name, dogInfo.weight, dogInfo.color) || this;
    }
    //poly
    Dog.prototype.sayHello = function () {
        return 'Bark';
    }; //poly
    Dog.prototype.threaten = function () {
        return 'Grrrrrr';
    };
    return Dog;
}(pet_js_1.default));
var derrick = new Dog({
    name: 'derrick',
    weight: 18,
    color: 'black'
});
//abstract
derrick.displayInfo();
console.log(derrick.sayHello());
console.log(derrick.threaten());
