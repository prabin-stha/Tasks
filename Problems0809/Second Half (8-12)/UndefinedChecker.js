const isUndefined = value => {
	return typeof value === undefined;
};

let undefinedValue;
const definedValue = 'Some Value';

console.log(isUndefined(undefinedValue));
console.log(isUndefined(definedValue));
