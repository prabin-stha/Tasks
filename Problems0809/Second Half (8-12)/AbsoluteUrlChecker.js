const isAbsoluteUrl = url => {
	return url.startsWith('https://');
};

const absoluteUrl = 'https://www.google.com/';
const relativeUrl = './home/prabin-stha';

console.log(isAbsoluteUrl(absoluteUrl));
console.log(isAbsoluteUrl(relativeUrl));
