# removeFirstOf(value, array): void

Removes the first instance of `value` from `array`.

# removeAllOf(value, array): void

Removes all instances of `value` from `array`.

# removeAllOfEach(values, array): void

Removes all instances of each value in `values` from `array`.


## Examples
```js
let arr = ['a', 'b', 'c', 'a', 'b', 'c'];
removeFirstOf('c', arr);
// arr is now ['a', 'b', 'a', 'b', 'c']

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
```js
import {removeFirstOf, removeAllOf, removeAllOfEach} 
    from '@writetome51/array-remove-all-of-first-of';
```
