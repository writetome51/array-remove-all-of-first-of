import { arrayHas } from '@writetome51/array-has';
import { removeFirstOf } from './removeFirstOf_removeFirstOfEach';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';


export function removeAllOf(value: any, array): void {
	while (arrayHas(value, array)) {
		removeFirstOf(value, array);
	}
}


export function removeAllOfEach(values: any[], array): void {
	errorIfLengthIsZero(values);
	for (let i = 0, length = values.length; i < length; ++i) {
		removeAllOf(values[i], array);
	}
}
