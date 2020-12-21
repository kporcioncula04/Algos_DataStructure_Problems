function maxSumSubarray(nums) {
  let result = nums[0]
  let maxSum = 0

  for(let val of nums){
      maxSum = val + Math.max(maxSum, 0)
      result = Math.max(maxSum, result)
  }

  return result

}

console.log(maxSumSubarray([-2, -5, 6, -2, -3, 1, 5, -6]))

//BIG 0 - O(n)

// val    MaxSum           result
// -2    -2  (-2,-2)    -2 + (0,0) = 2
// -5    -2  (-5,-2)    -5 + (-2,0) = 5
// 6     6   (6,-2)      6 + (-5,0) = 6
// -2    6   (4,6)      -2 + 6 = 4
// -3    6   (1,6)      -3 + 4 = 1
// 1     6   (2,6)       1 + 1 = 2
// 5     7   (7,6)       5 + 2 = 7
// 6     7   (1,7)      -6 + 7 = 1
