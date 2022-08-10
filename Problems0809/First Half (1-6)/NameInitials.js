const convertNameToInitials = name => {
	return name
		.split(' ')
		.map(el => el[0])
		.join('.');
};

console.log(convertNameToInitials('Prabin Shrestha'));
