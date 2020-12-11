// Given an array nums of integers, find three non-overlapping subarrays with maximum sum.

// Return the total sum of the three subarrays

// Example:

// Input: [2, 3, -8, 7, -2, 9, -9, 7, -2, 4]
// Output: 28
// Explanation: Subarrays [2, 3], [7, -2, 9] and [7, -2, 4] have the maximum sum of 28


function maxSumOfThreeSub(arr) {
  let n = arr.length
  let maxSum = 0;

  let leftMaxSum = new Array(n).fill(0)
  leftMaxSum[0] = arr[0]
  maxSum = arr[0]

  for (let i = 1; i < n; i++) {
    maxSum = arr[i] + Math.max(maxSum, 0)
    leftMaxSum[i] = Math.max(leftMaxSum[i - 1], maxSum)
    console.log('i:', i, 'maxSum ->', maxSum, 'leftmax ->', leftMaxSum[i])
  }

  console.log('leftMaxSum ->', leftMaxSum)

  let rightMaxSum = new Array(n).fill(0)
  rightMaxSum[n - 1] = arr[n - 1]
  maxSum = arr[n - 1]

  for (let i = n - 2; i > 0; i--) {
    maxSum = arr[i] + Math.max(maxSum, 0)
    rightMaxSum[i] = Math.max(rightMaxSum[i + 1], maxSum)
    console.log('i:', i, 'maxSum ->', maxSum, 'rightMaxSum ->', rightMaxSum[i])
  }

  console.log('rightMaxSum ->', rightMaxSum)

  maxSum = Number.NEGATIVE_INFINITY

  for (let i = 1; i < n; i++) {
    let sum1 = leftMaxSum[i - 1]
    let sum2 = 0;

    for (let j = i; j < n - 1; j++) {
      sum2 += arr[j]
      let sum3 = rightMaxSum[j + 1]
      console.log('sum3:', sum3)
      maxSum = Math.max(maxSum, sum1 + sum2 + sum3)
    }

    console.log('sum1:',sum1, 'sum2:', sum2)
  }

  return maxSum

}

console.log(maxSumOfThreeSub([2, 3, -8, 7, -2, 9, -9, 7, -2, 4]))
