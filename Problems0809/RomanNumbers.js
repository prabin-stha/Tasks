const getNumberFromRomanNumber = romanNumber => {
	switch (romanNumber) {
		case 'i':
			return 1;
		case 'ii':
			return 2;
		case 'iii':
			return 3;
		case 'iv':
			return 4;
		case 'v':
			return 5;
		case 'vi':
			return 6;
		case 'vii':
			return 7;
		case 'viii':
			return 8;
		case 'ix':
			return 9;
		default:
			return -1;
	}
};

const transformRomanNumber = romanNumber => {
	let totalX = 0;
	let getNumberFromRemainingRoman;
	const transformedRomanNumberArray = Array.from(romanNumber.toLowerCase());
	for (el of transformedRomanNumberArray) {
		if (el === 'x') {
			totalX++;
			continue;
		}
		break;
	}

	getNumberFromRemainingRoman = getNumberFromRomanNumber(
		transformedRomanNumberArray.slice(totalX).join('')
	);

	if (getNumberFromRemainingRoman == -1) return 'Error: Invalid Roman Number';

	return totalX * 10 + getNumberFromRemainingRoman;
};

console.log(transformRomanNumber('xxxxixsd'));
