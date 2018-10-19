"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayHas_1 = require("@writetome51/array-has/arrayHas");
var removeFirstOf_removeFirstOfEach_1 = require("./removeFirstOf_removeFirstOfEach");
//  value cannot be an object.
function removeAllOf(value, array) {
    while (arrayHas_1.arrayHas(value, array)) {
        removeFirstOf_removeFirstOfEach_1.removeFirstOf(value, array);
    }
}
exports.removeAllOf = removeAllOf;
// values cannot contain object.
function removeAllOfEach(values, array) {
    for (var i = 0; i < values.length; ++i) {
        removeAllOf(values[i], array);
    }
}
exports.removeAllOfEach = removeAllOfEach;
