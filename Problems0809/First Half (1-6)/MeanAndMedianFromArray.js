class Statistics {
	_arr;

	constructor(arr) {
		this._arr = arr;
	}

	calculateMean() {
		const sum = this._arr.reduce((acc, cur) => acc + cur, 0);
		return sum / this._arr.length;
	}

	calculateMedian() {
		const sortedArray = this._arr.slice().sort((a, b) => a - b);
		const midIntegerIndex = Math.floor(this._arr.length / 2);
		if (this._arr.length % 2 !== 0) {
			return sortedArray[midIntegerIndex];
		}
		return (
			(sortedArray[midIntegerIndex] + sortedArray[midIntegerIndex - 1]) /
			2
		);
	}
}

const stat = new Statistics([1, 2, 1, 5, 51, 68, 95, 25, 58, 56]);
console.log(stat.calculateMean());
console.log(stat.calculateMedian());
