# removeFirstOf(value, array): void

Removes the first instance of `value` from `array`.

# removeFirstOfEach(values, array): void

Removes the first instance of each value in `values` from `array`.

# removeAllOf(value, array): void

Removes all instances of `value` from `array`.

# removeAllOfEach(values, array): void

Removes all instances of each value in `values` from `array`.

NOTICE:  For all the functions, the parameter `value` cannot be an object, and the  
parameter `values` cannot contain an object.  'object' does not include arrays.  
Arrays are OK.

## Examples
```
let arr = ['a', 'b', 'c', 'a', 'b', 'c'];
removeFirstOf('a', arr);

// arr is now ['b', 'c', 'a', 'b', 'c']

arr = ['a', 'b', 'c', 1, 2, 3, 'a', 'b', 'c'];
removeFirstOfEach(['a', 'b', 'c'], arr);

// arr is now [1, 2, 3, 'a', 'b', 'c']

arr = ['a', 'b', 'c', 'a', 'b', 'c'];
removeAllOf('a', arr);

// arr is now ['b', 'c', 'b', 'c']

arr = ['a', 'b', 'c', 1, 2, 3, 'a', 'b', 'c'];
removeAllOfEach(['a', 'b', 'c'], arr);

// arr is now [1, 2, 3]
```

## Installation
`npm i  @writetome51/array-remove-all-of-first-of'`


## Loading
```
// if using TypeScript:
  import {removeFirstOf, removeFirstOfEach, removeAllOf, removeAllOfEach} 
    from '@writetome51/array-remove-all-of-first-of';

// if using ES5 JavaScript:
var removeFirstOf = require('@writetome51/array-remove-all-of-first-of').removeFirstOf;
var removeFirstOfEach = require('@writetome51/array-remove-all-of-first-of').removeFirstOfEach;
var removeAllOf = require('@writetome51/array-remove-all-of-first-of').removeAllOf;
var removeAllOfEach = require('@writetome51/array-remove-all-of-first-of').removeAllOfEach;
```