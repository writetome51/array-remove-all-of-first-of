"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstIndexOf_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOf");
var removeItem_1 = require("@writetome51/array-removers-basic/removeItem");
// value cannot be object.
function removeFirstOf(value, array) {
    var index = getFirstIndexOf_1.getFirstIndexOf(value, array);
    removeItem_1.removeItem(index, array);
}
exports.removeFirstOf = removeFirstOf;
// values cannot contain object.
function removeFirstOfEach(values, array) {
    for (var i = 0; i < values.length; ++i) {
        removeFirstOf(values[i], array);
    }
}
exports.removeFirstOfEach = removeFirstOfEach;
