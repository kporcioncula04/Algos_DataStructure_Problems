
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4

function longestConsecutive(nums){
  let result = 1;
  let i = 0;
  nums.sort((a,b) => a - b)
  console.log(nums)

  while(i < nums.length){
    let currVal = nums[i]
    let j = i +1

    while(j < nums.length && nums[j] <= currVal +1) {
      if(nums[j] === currVal + 1) currVal++;
      j++
    }

    result = Math.max(result, currVal - nums[i] + 1)
    i = j
  }
  return result
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
