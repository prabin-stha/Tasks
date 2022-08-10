const checkValidJSON = json => {
	try {
		return JSON.parse(json);
	} catch (err) {
		throw new Error('Invalid JSON Format');
	}
};

function main() {
	try {
		const validJSON = '{ "key": "someValue" }';
		const invalidJSON = '{ key: "someValue",}';

		console.log(checkValidJSON(validJSON));
		console.log(checkValidJSON(invalidJSON));
	} catch (err) {
		console.log(err.message);
	}
}

main();
