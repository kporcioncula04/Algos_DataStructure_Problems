//Given an input array of integers, find the length of the longest subarray without reapeating integers.
//Input: nums = [2, 5, 6, 2, 3, 1, 5, 6]
// Output: 5
// Explanation: [5, 6, 2, 3, 1] or [6, 2, 3, 1, 5] are both valid and of maximum length 5

function longestSubarrayWithoutReapeating(nums) {
  let result = 0;

  for(let i = 0; i < nums.length; i++){
    for(let j = i; j <nums.length; j++){
        if(nums.slice(i,j).includes(nums[j])){
            break
        }
         result = Math.max(result, j - i + 1)
    }

  }

  return result
}

console.log(longestSubarrayWithoutReapeating([2, 5, 6, 2, 3, 1, 5, 6]))
