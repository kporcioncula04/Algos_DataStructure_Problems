function maxSumSubarray(nums) {
  let maxSum = nums[0]

  for(let i = 0; i < nums.length; i++){
      let sum = 0;
      for(let j = i; j < nums.length; j++){
          sum += nums[j]

          maxSum = Math.max(sum, maxSum)
      }
  }

  return maxSum

}

console.log(maxSumSubarray([-2, -5, 6, -2, -3, 1, 5, -6]))
