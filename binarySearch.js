// Binary search helps to search for a target element in a sorted array
/*
In a sorted array, we will search for the element by checking the middle element.
If the middle element is equal to the target, we return its index.
If the middle element is less than the target, we search in the right half of the array.
If the middle element is greater than the target, we search in the left half of the array.
*/

const binarySearch = (arr, target) => {
  let left = 0; // Initialize the left pointer to the start of the array
  let right = arr.length - 1; // Initialize the right pointer to the end of the array

  // Continue searching while the left pointer is less than or equal to the right pointer
  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid; // Target found, return the index
    }

    // If the middle element is less than the target, search in the right half
    if (arr[mid] < target) {
      left = mid + 1; // Move the left pointer to mid + 1
    } else {
      // If the middle element is greater than the target, search in the left half
      right = mid - 1; // Move the right pointer to mid - 1
    }
  }

  // If the target is not found, return -1
  return -1; 
}

// Example usage: Searching for the number 5 in the sorted array
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: 4 (index of the target)