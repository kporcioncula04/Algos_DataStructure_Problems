function maxSumSub(arr){

  let result = arr[0]
  let partialSum = 0;
  let minSum = 0;

  for(let val of arr){
    partialSum += val
    result = Math.max(result, partialSum - minSum)
    minSum = Math.min(minSum, partialSum)
  }

  return result
}
console.log(maxSumSub([-2, -5, 6, -2, -3, 1, 5, -6]))


// i result val partialSum minSum
// 0 -2    -2      -2         -2
// 1 -2    -5      -7         -7
// 2  6     6      -1         -7
// 3  6    -2      -3         -7
// 4  6    -3     - 6         -7
// 5  6     1      -5         -7
// 6  7     5      -0         -7
// 7  7    -6      -6         -7
