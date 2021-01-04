function canGoRight(nums,i){
  if(i == nums.length -1) return false
  return nums[i+1] >= nums[i]
}
function canGoLeft(nums,i){
  if(i === 0) return false
  if(nums[i-1] >= nums[i]) return true
  else return false
}
function findPeakElement(nums) {
  let left = 0
  let right = nums.length -1

  while(left <= right){
      let middle = (left + right) >> 1

      if(canGoLeft(nums, middle)){
          right = middle -1
      } else if(canGoRight(nums, middle)){
          left = middle + 1
      } else {
          return middle
      }
  }
  return 0
}

console.log(findPeakElement([1, 2, 3, 1]))
