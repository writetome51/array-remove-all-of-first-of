import { removeAllOf, removeAllOfEach } from '../privy/removeAllOf_removeAllOfEach.js';
import { isMatch } from '@writetome51/is-match';
import {removeFirstOf} from '../privy/removeFirstOf.js';

let arr = ['a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false];


// Test 1
removeAllOf('a', arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 10, 20, 30, 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
removeAllOf(10, arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', true, false, ['a', 'b'], 20, 30,
    'b', 'c', 1, 2, 3, 20, ['a', 'b'], 30, 'b', 'c', 20, 30, true, false]))
    console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
removeAllOf(true, arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', false, ['a', 'b'], 20, 30,
    'b', 'c', 1, 2, 3, 20, ['a', 'b'], 30, 'b', 'c', 20, 30, false]))
    console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
removeAllOf(['a', 'b'], arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', false, 20, 30,
    'b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30, false]))
    console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: if item not found in array, function does nothing:
removeAllOf(10000, arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', false, 20, 30,
    'b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30, false]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');


arr = ['a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false];


// Test 7
removeAllOfEach(['a', 10, true, false, ['a', 'b']], arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30, 'b', 'c', 1, 2, 3, 20, 30, 'b', 'c', 20, 30]))
    console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8
removeAllOfEach(['b', 20, 2], arr);
if (isMatch(arr, ['c', 1, 3, 30, 'c', 30, 'c', 1, 3, 30, 'c', 30]))
    console.log('test 8 passed');
else console.log('test 8 FAILED');



// Test 10: if values are not found in array, function should do nothing:
removeAllOfEach([1000], arr);
if (isMatch(arr, ['c', 1, 3, 30, 'c', 30, 'c', 1, 3, 30, 'c', 30]))
	console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 11: if second arg is not array, it must trigger error:
let errorTriggered = false;
try {
    removeAllOfEach(['h', 'e'], 'hello everyone');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 11 passed');
else console.log('test 11 FAILED');


let obj = {name: 'steve'};
arr = [obj, {name: 'steve'}, obj];
removeAllOf(obj, arr);
console.log(arr);
// [{name: 'steve'}]

// All the functions use identical `===` to find matches, except when the
// value being search for is an array. Arrays must only have identical
// content to be a match:

arr = [[1,2], [3,4], [1,2]];
removeFirstOf([1,2], arr);
console.log(arr);
// [ [3,4], [1,2] ]

obj = {name: 'steve'};
arr = [ [obj], [{name: 'steve'}], [obj] ];
removeAllOf([obj], arr);
console.log(arr);
// arr is now [ [{name: 'steve'}] ]


obj = [{name: 'steve'}];
arr = [ obj, [{name: 'steve'}], obj ];
removeAllOf(obj, arr);
console.log(arr);
// arr is now [ [{name: 'steve'}] ]
