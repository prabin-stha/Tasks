const addPositiveNumbers = arr => {
	let sum = 0;

	if (!arr && !arr.isArray()) return 0;

	sum = arr.reduce((acc, cur) => {
		if (cur < 0) {
			return acc;
		}
		return acc + cur;
	}, 0);
	return sum;
};

console.log(addPositiveNumbers([5, 1, -1, 0]));
