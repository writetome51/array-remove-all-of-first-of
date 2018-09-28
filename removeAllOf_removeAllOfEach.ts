import { arrayHas } from '../../no_modify/return_boolean/arrayHas';
import { removeFirstOf } from './removeFirstOf_removeFirstOfEach';


//  value cannot be an object.

export function removeAllOf(value: any, array): void {
	while (arrayHas(value, array)) {
		removeFirstOf(value, array);
	}
}

// values cannot contain object.

export function removeAllOfEach(values: any[], array): void {
	for (let i = 0; i < values.length; ++i) {
		removeAllOf(values[i], array);
	}
}
