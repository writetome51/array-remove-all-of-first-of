import { getIndexOf } from '@writetome51/array-get-indexes-of';
import { removeByIndex } from '@writetome51/array-remove-by-index';


export const removeFirstOf = <T>(value: T, array: T[]): void => {
	let index = getIndexOf(value, array);
	if (index > -1) removeByIndex(index, array);
};
