const countOccurrences = arr => {
	const concatArray = arr.reduce((acc, cur) => acc.concat(cur), []);
	return concatArray.reduce((acc, cur) => {
		!acc[cur] ? (acc[cur] = 1) : acc[cur]++;
		return acc;
	}, {});
};

console.log(
	countOccurrences([
		['My', 'name', 'name'],
		['is', 'Prabin', 'Prabin', 'Shrestha'],
	])
);
