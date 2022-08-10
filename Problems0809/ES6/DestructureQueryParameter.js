const getQueryParametersObject = url => {
	const params = new URLSearchParams(url);
	return Array.from(params.entries()).reduce((acc, el) => {
		acc[el[0]] = el[1];
		return acc;
	}, {});
};

// const currentQueryParameterFromBrowser = location.search;
const customQueryParamater =
	'?name=Prabin Shrestha&country=Nepal&address=Kathmandu';

// console.log(getQueryParametersObject(currentQueryParameterFromBrowser));
console.log(getQueryParametersObject(customQueryParamater));
