"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_has_1 = require("@writetome51/array-has");
var removeFirstOf_removeFirstOfEach_1 = require("./removeFirstOf_removeFirstOfEach");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
//  value cannot be an object.
function removeAllOf(value, array) {
    while (array_has_1.arrayHas(value, array)) {
        removeFirstOf_removeFirstOfEach_1.removeFirstOf(value, array);
    }
}
exports.removeAllOf = removeAllOf;
// values cannot contain object.
function removeAllOfEach(values, array) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(values);
    for (var i = 0; i < values.length; ++i) {
        removeAllOf(values[i], array);
    }
}
exports.removeAllOfEach = removeAllOfEach;
