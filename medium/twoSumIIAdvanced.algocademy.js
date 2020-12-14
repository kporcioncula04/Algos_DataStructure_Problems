// Two Sum II - O(n log n) Advanced

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input will have at most one solution, and you may not use the same index twice.

// In case no solution exists, return [-1, -1]

// Example:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

function binarySearch(sortedNums, first, last, value){
  while(first <= last){
      let middle = first + Math.floor((last-first) / 2)

      if(sortedNums[middle][0] === value){
          return middle
      } else if(sortedNums[middle][0] < value){
          first = middle + 1
      } else {
          last = middle - 1
      }
  }

  return -1
}
function twoSum(nums, target) {
  let sortedNums = []
  for(let i = 0; i < nums.length; i++){
      sortedNums.push([nums[i], i])
  }

  sortedNums.sort((first, second) => first[0] - second[0])

  for(let i = 0; i < sortedNums.length; i++){
      let j = binarySearch(sortedNums, i + 1, sortedNums.length - 1, target - sortedNums[i][0])

      if(j != -1){
          return [sortedNums[i][1], sortedNums[j][1]]
      }
  }
  return [-1,-1]
}

console.log(twoSum([2, 15, 11, 7], 9))
