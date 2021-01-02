function jump(nums) {
  let dp = new Array(nums.length).fill(nums.length)
  dp[nums.length - 1] = 0

  for(let i = nums.length - 2; i >= 0; i--){
      for(let j = i+ 1 ; j < nums.length && j <= i + nums[i]; j++){
          dp[i] = Math.min(dp[j] + 1, dp[i])
      }
  }

  return dp[0]
}

console.log(jump([2,3,1,1,4]))
