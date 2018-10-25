import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic';
import { removeItem } from '@writetome51/array-remove-item';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


// value cannot be object.

export function removeFirstOf(value: any, array): void {
	let index = getFirstIndexOf(value, array);
	if (index > -1) removeItem(index, array);
}


// values cannot contain object.

export function removeFirstOfEach(values: any[], array): void {
	errorIfNotPopulatedArray(values);
	for (let i = 0; i < values.length; ++i) {
		removeFirstOf(values[i], array);
	}
}