const getNumberFromRomanNumber = romanNumber => {
	switch (romanNumber) {
		case 1:
			return 'i';
		case 2:
			return 'ii';
		case 3:
			return 'iii';
		case 4:
			return 'iv';
		case 5:
			return 'v';
		case 6:
			return 'vi';
		case 7:
			return 'vii';
		case 8:
			return 'viii';
		case 9:
			return 'ix';
		default:
			return '';
	}
};

const convertIntToRomanNumber = number => {
	if (number === 0) throw new Error('0 cannot be converted to Roman number!');
	if (typeof number !== 'number')
		throw new Error('Enter a valid Integer value!');
	const integerValue = Math.floor(number);
	const countOfX = Math.floor(integerValue / 10);
	let stringOfXArray = [];
	if (number < 10) return getNumberFromRomanNumber(integerValue);
	for (i = 0; i < countOfX; i++) {
		stringOfXArray.push('x');
	}
	return (
		stringOfXArray.join('') + getNumberFromRomanNumber(integerValue % 10)
	).toUpperCase();
};

function main() {
	try {
		const number = 0;
		console.log(convertIntToRomanNumber(number));
	} catch (err) {
		console.error(err.message);
	}
}

main();
