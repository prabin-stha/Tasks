// Helper Functions
const findParentIndex = index => Math.floor((index - 1) / 2);
const findLeftChildIndex = index => Math.floor(2 * index + 1);
const findRightChildIndex = index => Math.floor(2 * index + 2);
const swap = (arr, indexOne, indexTwo) =>
	([arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]);

/**
 *
 * @param {Array} arr Unsorted List of Numbers
 * @param {bool} sortAsc if true -> min heap and else if false -> max heap
 * @returns Heap Array
 */
const createHeap = (arr, sortAsc) => {
	let heap = [];

	const insertItemIntoHeap = (item, heap) => {
		heap.push(item);
		let currentIndex = heap.length - 1;
		let parentIndex = findParentIndex(currentIndex);
		while (
			sortAsc
				? heap[parentIndex] && heap[currentIndex] < heap[parentIndex]
				: heap[parentIndex] && heap[currentIndex] > heap[parentIndex]
		) {
			swap(heap, parentIndex, currentIndex);
			currentIndex = findParentIndex(currentIndex);
			parentIndex = findParentIndex(currentIndex);
		}
	};

	for (let item of arr) {
		insertItemIntoHeap(item, heap);
	}

	return heap;
};

/**
 *
 * @param {Array} arr Unsorted List of Numbers
 * @param {book} sortAsc default is true -> sort ascending. If false -> sort descending
 * @returns Sorted List of Numbers
 */
function heapSort(arr, sortAsc = true) {
	let sorted = [];
	let heap = createHeap(arr, sortAsc);

	/**
	 *
	 * @param {Array} heap Heap Array
	 * @param {bool} sortAsc if true -> creates min heap else if false -> creates max heap
	 * @returns Max or Min value from Heap Array
	 */
	const deleteFromHeap = (heap, sortAsc) => {
		let maxValue = heap.shift();
		heap.unshift(heap.pop());
		let currentIndex = 0;
		let leftChild = findLeftChildIndex(currentIndex);
		let rightChild = findRightChildIndex(currentIndex);

		while (
			heap[leftChild] &&
			(sortAsc
				? heap[leftChild] < heap[currentIndex] ||
				  heap[rightChild] < heap[currentIndex]
				: heap[leftChild] > heap[currentIndex] ||
				  heap[rightChild] > heap[currentIndex])
		) {
			let maxValueIndex = leftChild;
			if (
				heap[rightChild] &&
				(sortAsc
					? heap[rightChild] < heap[maxValueIndex]
					: heap[rightChild] > heap[maxValueIndex])
			) {
				maxValueIndex = rightChild;
			}
			swap(heap, currentIndex, maxValueIndex);
			currentIndex = maxValueIndex;
			leftChild = findLeftChildIndex(maxValueIndex);
			rightChild = findRightChildIndex(maxValueIndex);
		}
		return maxValue;
	};

	for (i = 0; i < arr.length; i++) {
		sorted.push(deleteFromHeap(heap, sortAsc));
	}

	return sorted;
}

// Main function
function main() {
	const heapSortedList = heapSort([1, 5, 7]);
	console.log(heapSortedList);
}

main();
