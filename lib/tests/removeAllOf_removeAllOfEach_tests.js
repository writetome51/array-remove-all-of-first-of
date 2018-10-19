"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeAllOf_removeAllOfEach_1 = require("../removeAllOf_removeAllOfEach");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
var arr = ['a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false];
// Test 1
removeAllOf_removeAllOfEach_1.removeAllOf('a', arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 10, 20, 30, 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
removeAllOf_removeAllOfEach_1.removeAllOf(10, arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', true, false, ['a', 'b'], 20, 30,
    'b', 'c', 1, 2, 3, 20, ['a', 'b'], 30, 'b', 'c', 20, 30, true, false]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
removeAllOf_removeAllOfEach_1.removeAllOf(true, arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', false, ['a', 'b'], 20, 30,
    'b', 'c', 1, 2, 3, 20, ['a', 'b'], 30, 'b', 'c', 20, 30, false]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
removeAllOf_removeAllOfEach_1.removeAllOf(['a', 'b'], arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', false, 20, 30,
    'b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30, false]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: if item not found in array, function does nothing:
removeAllOf_removeAllOfEach_1.removeAllOf(10000, arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', false, 20, 30,
    'b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30, false]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: if item to remove is object, it must trigger error:
var errorTriggered = false;
try {
    removeAllOf_removeAllOfEach_1.removeAllOf({ prop: 1 }, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
arr = ['a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false];
// Test 7
removeAllOf_removeAllOfEach_1.removeAllOfEach(['a', 10, true, false, ['a', 'b']], arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30, 'b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30]))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8
removeAllOf_removeAllOfEach_1.removeAllOfEach(['b', 20, 2], arr);
if (arraysMatch_1.arraysMatch(arr, ['c', 1, 3, 30, 'c', 30, 'c', 1, 3, 30, 'c', 30]))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9: if array of values to remove is empty, should trigger error:
errorTriggered = false;
try {
    removeAllOf_removeAllOfEach_1.removeAllOfEach([], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10: if values are not found in array, function should do nothing:
removeAllOf_removeAllOfEach_1.removeAllOfEach([1000], arr);
if (arraysMatch_1.arraysMatch(arr, ['c', 1, 3, 30, 'c', 30, 'c', 1, 3, 30, 'c', 30]))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11: if values to remove contains object, it must trigger error:
errorTriggered = false;
try {
    removeAllOf_removeAllOfEach_1.removeAllOfEach([1, { prop: 1 }], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12: if first arg is not array, it must trigger error:
errorTriggered = false;
try {
    removeAllOf_removeAllOfEach_1.removeAllOfEach('hello everyone', arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13: if second arg is not array, it must trigger error:
errorTriggered = false;
try {
    removeAllOf_removeAllOfEach_1.removeAllOfEach(['h', 'e'], 'hello everyone');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');