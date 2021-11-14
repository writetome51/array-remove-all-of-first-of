import {getIndexOf} from '@writetome51/array-get-indexes-of';
import {removeByIndex} from '@writetome51/array-remove-by-index';


export const removeFirstOf = (value, array) => {
	const index = getIndexOf(value, array);
	if (index > -1) removeByIndex(index, array);
};
