"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeFirstOf_removeFirstOfEach_1 = require("../removeFirstOf_removeFirstOfEach");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
var arr = ['a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false];
// Test 1
removeFirstOf_removeFirstOfEach_1.removeFirstOf('a', arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
removeFirstOf_removeFirstOfEach_1.removeFirstOf(10, arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
removeFirstOf_removeFirstOfEach_1.removeFirstOf(true, arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
removeFirstOf_removeFirstOfEach_1.removeFirstOf(['a', 'b'], arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', false, 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: if item not found in array, function does nothing:
removeFirstOf_removeFirstOfEach_1.removeFirstOf(10000, arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', false, 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: if item to remove is object, must trigger error:
var errorTriggered = false;
try {
    removeFirstOf_removeFirstOfEach_1.removeFirstOf({ prop: 1 }, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: if second arg is not array, must trigger error:
errorTriggered = false;
try {
    removeFirstOf_removeFirstOfEach_1.removeFirstOf(20, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
arr = ['a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false];
// Test 8
removeFirstOf_removeFirstOfEach_1.removeFirstOfEach(['a', 1, true, ['a', 'b']], arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 2, 3, 10, 20, 30, 'a', 'b', 'c', false, 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9
removeFirstOf_removeFirstOfEach_1.removeFirstOfEach([false, 10, 'a', ['a', 'b']], arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 2, 3, 20, 30, 'b', 'c', 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10: if array of values to remove is empty, should trigger error:
errorTriggered = false;
try {
    removeFirstOf_removeFirstOfEach_1.removeFirstOfEach([], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11:  if item not found in array, function should do nothing:
removeFirstOf_removeFirstOfEach_1.removeFirstOfEach([1000, 2000], arr);
if (arraysMatch_1.arraysMatch(arr, ['b', 'c', 2, 3, 20, 30, 'b', 'c', 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12: if array of values to remove contains object, should trigger error:
errorTriggered = false;
try {
    removeFirstOf_removeFirstOfEach_1.removeFirstOfEach([1, {}], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13: if second arg is not array, must trigger error:
errorTriggered = false;
try {
    removeFirstOf_removeFirstOfEach_1.removeFirstOfEach([1, 2], {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
// Test 14: if second arg is not array, must trigger error:
errorTriggered = false;
try {
    removeFirstOf_removeFirstOfEach_1.removeFirstOfEach((1), arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
