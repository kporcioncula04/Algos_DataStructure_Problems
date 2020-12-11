// function rotate(nums, k) {
//   let n = nums.length, index = 0, startIndex = 0

//   for(let i = 0; i < n; i++){
//       let nextIndex = (index + k) % n;
//       let temp = nums[nextIndex]
//       nums[nextIndex] = nums[startIndex]
//       nums[startIndex] = temp

//       index = nextIndex

//       if(index === startIndex){
//           index++
//           startIndex++
//       }
//   }
// }

// console.log(rotate([1, 2, 3, 4, 5], 2))


function rotate(nums, k){
  k = k % nums.length

  while(k > 0){
    nums.unshift(nums.pop());
    k--;
  }

}

console.log(rotate([1, 2, 3, 4, 5], 6))
console.log('hi')

//what if k is larger than the length of nums?
//take k & use modulo and length of array ex: k = 6 % 4 = 2, to find the remainder

//Reverse Method
// function rotate(nums, k){
//   k = k % nums.length

//   reverse(nums, 0, nums.length - 1)
//   reverse(nums, 0, k - 1)
//   reverse(nums, k, nums.length - 1)
// }

// function reverse(nums, start, end){
//   while(start < end){
//     let temp = nums[start]
//     nums[start] = nums[end]
//     nums[end] = temp
//     start++;
//     end--;
//   }

// }

// console.log(rotate([1, 2, 3, 4, 5], 2))
