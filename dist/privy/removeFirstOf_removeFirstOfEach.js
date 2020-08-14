import { getIndexOf } from '@writetome51/array-get-indexes-of';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';


export function removeFirstOf(value, array) {
    let index = getIndexOf(value, array);
    if (index > -1) removeByIndex(index, array);
}


export function removeFirstOfEach(values, array) {
    errorIfLengthIsZero(values);
    for (let i = 0, length = values.length; i < length; ++i) {
        removeFirstOf(values[i], array);
    }
}
