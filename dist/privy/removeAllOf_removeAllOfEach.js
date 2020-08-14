import { arrayHas } from '@writetome51/array-has';
import { removeFirstOf } from './removeFirstOf_removeFirstOfEach.js';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';


export function removeAllOf(value, array) {
    while (arrayHas(value, array)) {
        removeFirstOf(value, array);
    }
}


export function removeAllOfEach(values, array) {
    errorIfLengthIsZero(values);
    for (let i = 0, length = values.length; i < length; ++i) {
        removeAllOf(values[i], array);
    }
}
