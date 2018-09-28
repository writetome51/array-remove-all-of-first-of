import { getFirstIndexOf } from '@writetome51/array-get-indexes/indexes/getFirstIndexOf';
import { removeItem } from './array-modifiers-that-return-void-basic/removeItem';

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