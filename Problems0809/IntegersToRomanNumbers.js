const mapOfIntegerRoman = new Map([
	[1000, 'm'],
	[900, 'cm'],
	[500, 'd'],
	[400, 'cd'],
	[100, 'c'],
	[90, 'xc'],
	[50, 'l'],
	[40, 'xl'],
	[10, 'x'],
	[9, 'ix'],
	[5, 'v'],
	[4, 'iv'],
	[1, 'i'],
]);

const convertIntegerToRoman = enteredNumber => {
	let integerValue = Math.floor(enteredNumber);
	let romanNumberList = [];

	if (integerValue === 0)
		throw new Error('0 cannot be converted to Roman integerValue!');
	if (typeof integerValue !== 'number')
		throw new Error('Enter a valid Integer value!');

	while (integerValue !== 0) {
		for (mappedNumber of mapOfIntegerRoman) {
			if (integerValue >= mappedNumber[0]) {
				romanNumberList.push(mappedNumber[1]);
				integerValue -= mappedNumber[0];
				break;
			}
		}
	}

	return romanNumberList.join('').toUpperCase();
};

function main() {
	try {
		const number = 5548;
		console.log(convertIntegerToRoman(number));
	} catch (err) {
		console.error(err.message);
	}
}

main();
