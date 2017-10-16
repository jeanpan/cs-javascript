// http://interactivepython.org/courselib/static/pythonds/SortSearch/TheInsertionSort.html
// Time: O(n*n)
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let pos = i;
    
    while (pos > 0 && nums[pos - 1] > curr) {
      nums[pos] = nums[pos - 1];
      pos -= 1;
    }
    nums[pos] = curr;
  }
  return nums;
}