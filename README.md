# removeFirstOf\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: T,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): void

Removes the first instance of `value` from `array`.

# removeAllOf\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: T,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): void

Removes all instances of `value` from `array`.

# removeAllOfEach\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: T[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): void

Removes all instances of each value in `values` from `array`.

All the functions use identical `===` to find matches, except when the
value being search for is an array. Arrays must only have identical
content to be a match (see examples).

## Examples
```js
let arr = ['a', 'b', 'c', 'a', 'b', 'c'];
removeFirstOf('c', arr);
// arr is now ['a', 'b', 'a', 'b', 'c']

arr = ['a', 'b', 'c', 'a', 'b', 'c'];
removeAllOf('c', arr);
// arr is now ['a', 'b', 'a', 'b']

arr = ['a', 'b', 'c', 1, 2, 3, 'a', 'b', 'c'];
removeAllOfEach(['a', 'b', 'c'], arr);
// arr is now [1, 2, 3]

const obj = {name: 'steve'};
arr = [obj, {name: 'steve'}];
removeAllOf(obj, arr);
// arr is now [{name: 'steve'}]

// All the functions use identical `===` to find matches, except when the 
// value being search for is an array. Arrays must only have identical 
// content to be a match:

arr = [[1,2], [3,4], [1,2]];
removeFirstOf([1,2], arr);
// arr is now [ [3,4], [1,2] ]

const obj = {name: 'steve'};
arr = [ [obj], [{name: 'steve'}] ];
removeAllOf([obj], arr);
// arr is now [ [{name: 'steve'}] ]
```

## Installation
`npm i  @writetome51/array-remove-all-of-first-of'`


## Loading
```js
import {removeFirstOf, removeAllOf, removeAllOfEach} 
    from '@writetome51/array-remove-all-of-first-of';
```
