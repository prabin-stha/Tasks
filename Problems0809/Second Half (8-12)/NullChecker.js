const isNull = value => {
	return value === null;
};

const nullValue = null;
const notNullValue = 'Some String';

console.log(isNull(nullValue));
console.log(isNull(notNullValue));
