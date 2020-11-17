// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.


// function jump(arr){
//   let lastValidIdx = arr.length - 1

//   for(let i = lastValidIdx; i >= 0; i--){
//     if(i + arr[i] >= lastValidIdx){
//       lastValidIdx = i
//     }
//   }

//   return lastValidIdx === 0
// }

function jump(arr){
  let idx = 0;
  let max = 0;
  let target = arr.length - 1

  while(idx < arr.length ){
    max = Math.max(max, idx + arr[idx])

    if(max >= target) return true
    if(max <= idx && arr[idx] === 0) return false
    idx++
  }

  return false
}

console.log(jump([2,3,1,1,4]))
