import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


// value cannot be object.

export function removeFirstOf(value: any, array): void {
	let index = getFirstIndexOf(value, array);
	if (index > -1) removeByIndex(index, array);
}


// values cannot contain object.

export function removeFirstOfEach(values: any[], array): void {
	errorIfNotPopulatedArray(values);
	for (let i = 0; i < values.length; ++i) {
		removeFirstOf(values[i], array);
	}
}
