import {has} from '@writetome51/array-has';
import {removeFirstOf} from './removeFirstOf.js';


export const removeAllOf = (value, array) => {
	for (; has(value, array);) removeFirstOf(value, array);
};


export const removeAllOfEach = (values, array) => {
	for (let i = 0, length = values.length; i < length; ++i) {
		removeAllOf(values[i], array);
	}
};
