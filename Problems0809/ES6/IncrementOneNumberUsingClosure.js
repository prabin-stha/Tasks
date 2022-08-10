const IncrementByOne = initialValue => {
	let count = initialValue;

	return (increment = () => {
		count = count + 1;
		return count;
	});
};

incrementByOne = IncrementByOne(0);
incrementByOne();
incrementByOne();
console.log(incrementByOne());
