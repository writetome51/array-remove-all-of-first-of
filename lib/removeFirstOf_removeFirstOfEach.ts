import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic/getFirstIndexOf';
import { removeItem } from '@writetome51/array-remove-item';

// value cannot be object.

export function removeFirstOf(value: any, array): void {
	let index = getFirstIndexOf(value, array);
	removeItem(index, array);
}

// values cannot contain object.

export function removeFirstOfEach(values: any[], array): void {
	for (let i = 0; i < values.length; ++i) {
		removeFirstOf(values[i], array);
	}
}