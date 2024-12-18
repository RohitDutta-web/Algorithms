//  Sliding Window Algorithm
/*The Sliding Window Algorithm is a highly efficient technique used to solve
 problems that involve operating on contiguous subarrays or substrings.
 It helps reduce the time complexity of such problems by avoiding unnecessary recomputation. */
// Problem: Find the maximum sum of a subarray of size k.

// Function to calculate the maximum sum of a subarray of size k
const maxSubArraySum = (arr, k) => {
  // Initialize variables to store the maximum sum and the current sum of the window
  let max = 0; // This will hold the maximum sum found
  let currentSum = 0; // This will hold the sum of the current window

  // Step 1: Calculate the sum of the first 'k' elements
  // This initializes the first window of size k
  for (let i = 0; i < k; i++) {
    currentSum += arr[i]; // Add each of the first 'k' elements to currentSum
  }

  // Initialize max with the sum of the first 'k' elements
  max = currentSum;

  // Step 2: Slide the window across the array
  // Start from the (k+1)th element and go to the end of the array
  for (let i = k; i < arr.length; i++) {
    // Update currentSum by adding the next element and removing the first element of the previous window
    currentSum = currentSum + arr[i] - arr[i - k];

    // Step 3: Update max if the current window's sum is greater
    if (max < currentSum) {
      max = currentSum; // Update max to the new maximum sum
    }
  }

  // Step 4: Return the maximum sum of any contiguous subarray of size k
  return max; 
}

// Example usage: Finding the maximum sum of a subarray of size 1
console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); // Output: 9
