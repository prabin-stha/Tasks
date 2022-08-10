const isUppercase = str => {
	return str[0] === str[0].toUpperCase();
};

const upperCaseValue = 'Upper';
const lowerCaseValue = 'upper';

console.log(isUppercase(upperCaseValue));
console.log(isUppercase(lowerCaseValue));
