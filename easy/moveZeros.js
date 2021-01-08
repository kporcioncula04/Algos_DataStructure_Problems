// function moveZeroes(nums) {
//   let j = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i]!== 0){
//       nums[j] = nums[i]
//       if(i > j) nums[i] = 0
//       j++
//     }
//   }

//   return nums
// }
//o(n)

function moveZeroes(nums){
  let anchor = 0;

  for(let explorer = 0; explorer < nums.length;explorer++){
    if(nums[explorer] !== 0){
      //swap
      let temp = nums[anchor]
      nums[anchor] = nums[explorer]
      nums[explorer] = temp

      anchor++;
    }
  }
  return nums

}

//big o(n)
let input = [0,1,0,3,12]
console.log(moveZeroes(input))

