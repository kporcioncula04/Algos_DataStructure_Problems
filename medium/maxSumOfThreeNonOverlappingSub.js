function maxSumSubarray(nums) {
  let result = nums[0]
  let maxSum = 0

  for (let val of nums) {
    maxSum = val + Math.max(maxSum, 0)
    result = Math.max(maxSum, result)
  }

  return result
}

function maxSumOfThreeSubarrays(nums) {
  let n = nums.length
  let maxSum = Number.NEGATIVE_INFINITY

  for (let i = 1; i < n; i++) {
    let sum1 = maxSumSubarray(nums.slice(0, i))
    let sum2 = 0
    for (let j = i; j < n - 1; j++) {
      sum2 += nums[j]
      let sum3 = maxSumSubarray(nums.slice(j + 1))
      maxSum = Math.max(maxSum, sum1 + sum2 + sum3)
    }
  }

  return maxSum
}

//BIG O - O(n^3)

console.log(maxSumOfThreeSubarrays([2, 3, -8, 7, -2, 9, -9, 7, -2, 4]))
