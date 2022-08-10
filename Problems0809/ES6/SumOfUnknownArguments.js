const sumOfUnknownArguments = (...num) => {
	return num[0].reduce((acc, cur) => acc + cur, 0);
};

const numbers = [1, 5, 9, 50, 56, 2, 60, 58, 2, 36];
console.log(sumOfUnknownArguments(numbers));
