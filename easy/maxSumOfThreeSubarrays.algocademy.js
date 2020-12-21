function maxSumOfThreeSubarrays(nums) {
  let n = nums.length
  let maxSum = -Infinity

  for(let i1 = 0; i1 < n; i1++){
      let sum1 = 0

      for(let j1 = i1; j1 < n; j1++){
          sum1 += nums[j1]

          for(let i2 = j1+1; i2 < n;i2++){
              let sum2 = 0
              for(let j2 = i2; j2 < n; j2++){
                  sum2 += nums[j2]
                  for(let i3 = j2+1; i3 < n; i3++){
                      let sum3 = 0
                      for(let j3 = i3; j3 < n; j3++){
                          sum3+=nums[j3]
                          maxSum = Math.max(maxSum, sum1 + sum2 + sum3)
                      }
                  }
              }
          }

          console.log('sum1 ->', sum1)
      }
  }
  return maxSum
}

console.log(maxSumOfThreeSubarrays([2, 3, -8, 7, -2, 9, -9, 7, -2, 4]))
