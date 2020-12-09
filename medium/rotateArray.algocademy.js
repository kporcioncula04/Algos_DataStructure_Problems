function rotate(nums, k) {
  let n = nums.length, index = 0, startIndex = 0

  for(let i = 0; i < n; i++){
      let nextIndex = (index + k) % n;
      let temp = nums[nextIndex]
      nums[nextIndex] = nums[startIndex]
      nums[startIndex] = temp

      index = nextIndex

      if(index === startIndex){
          index++
          startIndex++
      }
  }
}

console.log(rotate([1, 2, 3, 4, 5], 2))
