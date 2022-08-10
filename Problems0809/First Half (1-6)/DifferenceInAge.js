const findAgeDifference = ageArr => {
	const youngest = Math.min(...ageArr);
	const oldest = Math.max(...ageArr);
	return `
    Youngest age: ${youngest}
    Oldest age: ${oldest}
    Age difference: ${oldest - youngest}
    `;
};

console.log(findAgeDifference([5, 15, 52, 45, 68, 70]));
