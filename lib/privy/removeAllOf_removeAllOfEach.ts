import { has } from '@writetome51/array-has';
import { removeFirstOf } from './removeFirstOf';


export const removeAllOf = <T>(value: T, array: T[]): void => {
	for ( ; has(value, array); ) removeFirstOf(value, array);
};


export const removeAllOfEach = <T>(values: T[], array: T[]): void => {
	for (let i = 0, length = values.length; i < length; ++i) {
		removeAllOf(values[i], array);
	}
};
