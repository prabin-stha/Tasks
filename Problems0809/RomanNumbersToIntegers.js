function value(r) {
	switch (r) {
		case 'i':
			return 1;
		case 'v':
			return 5;
		case 'x':
			return 10;
		case 'l':
			return 50;
		case 'c':
			return 100;
		case 'd':
			return 500;
		case 'm':
			return 1000;
		default:
			return -1;
	}
}

function convertRomanToInteger(inputStr) {
	const str = inputStr.toLowerCase();
	var num = 0;

	for (i = 0; i < str.length; i++) {
		var indexValue = value(str.charAt(i));
		if (indexValue === -1) return 'Invalid Roman Number Format!';

		if (i + 1 < str.length) {
			var nextIndexValue = value(str.charAt(i + 1));

			if (indexValue >= nextIndexValue) {
				num = num + indexValue;
			} else {
				num = num + nextIndexValue - indexValue;
				i++;
			}
		} else {
			num = num + indexValue;
		}
	}
	return num;
}

console.log(convertRomanToInteger('DCII'));
