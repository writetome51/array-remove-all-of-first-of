import { removeFirstOf } from '../privy/removeFirstOf.js';
import { isMatch } from '@writetome51/is-match';

let arr = ['a', 'b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false];
// Test 1
removeFirstOf('a', arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 10, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
removeFirstOf(10, arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', true, false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
removeFirstOf(true, arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', false, ['a', 'b'], 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
removeFirstOf(['a', 'b'], arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', false, 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: if item not found in array, function does nothing:
removeFirstOf(10000, arr);
if (isMatch(arr, ['b', 'c', 1, 2, 3, 20, 30, 'a', 'b', 'c', false, 10, 20, 30,
    'a', 'b', 'c', 1, 2, 3, 10, 20, ['a', 'b'], 30, 'a', 'b', 'c', 10, 20, 30, true, false]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');


// Test 7: if second arg is not array, must trigger error:
let errorTriggered = false;
try {
    removeFirstOf(20, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
