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
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(catInfo) {
        return _super.call(this, catInfo.name, catInfo.weight, catInfo.color) || this;
    }
    Cat.prototype.sayHello = function () {
        return 'Meow';
    };
    Cat.prototype.threaten = function () {
        return 'hssssss';
    };
    return Cat;
}(pet_js_1.default));
var chuck = new Cat({
    name: 'chuck',
    weight: 14,
    color: 'blue'
});
chuck.displayInfo();
console.log(chuck.sayHello());
console.log(chuck.threaten());
