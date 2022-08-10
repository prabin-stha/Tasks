const calculateFactorial = num => {
	if (typeof num !== 'number')
		throw new Error('The entered value is not a number!');

	if (num < 0)
		throw new Error('Factorials are only calculated for positive numbers');

	if (num === 0) return 1;

	return num * calculateFactorial(num - 1);
};

function main() {
	try {
		console.log(calculateFactorial(3));
	} catch (err) {
		console.error(err.message);
	}
}

main();
