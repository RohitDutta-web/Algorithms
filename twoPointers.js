/*The two-pointer technique is an efficient way to solve problems involving pairs in a sorted array.
 By maintaining two pointers (one at the beginning and one at the end of the array),
 we can efficiently find pairs that meet certain criteria (in this case, pairs that sum to a target value). */


function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if ((arr[left] + arr[right]) === target) {
      return [left,right];
    }
    if ((arr[left] + arr[right]) < target) {
     left++
    } else {
      right--
   }
    
  }
  return [];
}

console.log(twoSum([1,2,3,8,6,7,4,8], 10));
