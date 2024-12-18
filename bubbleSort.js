/*The bubbleSort function implements the Bubble Sort algorithm,
 which is a simple sorting algorithm that repeatedly steps through the list,
  compares adjacent elements, and swaps them if they are in the wrong order.
   Below is the code with detailed comments explaining how Bubble Sort works 
and the steps involved in the implementation. */

// Function to perform Bubble Sort on an array
function bubbleSort(arr) { 
  let n = arr.length; // Get the length of the array

  // Step 1: Outer loop to iterate through the entire array
  for (let i = 0; i < n; i++) {
    // Step 2: Inner loop to compare adjacent elements
    // The last i elements are already sorted, so we reduce the range
    for (let j = 0; j < n - i - 1; j++) {
      // Step 3: Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Step 4: Swap if the current element is greater than the next
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap using destructuring assignment
      }
    }
  }

  // Step 5: Return the sorted array
  return arr;
}

// Example usage: Sorting an array using Bubble Sort
console.log(bubbleSort([5, 7, 6, 4, 8, 2, 1, 6, 8])); // Output: [1, 2, 4, 5, 6, 6, 7, 8, 8]
