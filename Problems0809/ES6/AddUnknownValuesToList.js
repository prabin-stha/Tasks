const addUnknownValuesToList = (...values) => {
	const listOfValues = [];
	for (value of values) {
		if (value.constructor === Array) {
			listOfValues.push(...value);
			continue;
		}
		listOfValues.push(value);
	}
	return listOfValues;
};

const values = [1, 'a', [2, 1, 'b'], 'a'];
console.log(addUnknownValuesToList(...values));
