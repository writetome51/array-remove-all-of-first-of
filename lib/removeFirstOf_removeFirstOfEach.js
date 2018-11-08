"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_basic_1 = require("@writetome51/array-get-indexes-basic");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
// value cannot be object.
function removeFirstOf(value, array) {
    var index = array_get_indexes_basic_1.getFirstIndexOf(value, array);
    if (index > -1)
        array_remove_by_index_1.removeByIndex(index, array);
}
exports.removeFirstOf = removeFirstOf;
// values cannot contain object.
function removeFirstOfEach(values, array) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(values);
    for (var i = 0; i < values.length; ++i) {
        removeFirstOf(values[i], array);
    }
}
exports.removeFirstOfEach = removeFirstOfEach;
