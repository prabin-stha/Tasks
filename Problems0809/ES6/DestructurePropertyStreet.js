const person = { name: 'Costas', address: { street: 'Lalaland 12' } };
const {
	address: { street },
} = person;

console.log(street);
