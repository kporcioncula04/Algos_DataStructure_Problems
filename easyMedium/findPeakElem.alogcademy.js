let isPeak = function(nums,i) {
  if(i === 0) return nums[i] > nums[i+1]
  if(i === nums.length -1) return nums[i] > nums[i - 1]
  return nums[i -1] < nums[i] && nums[i+1] < nums[i]
}
var findPeakElement = function(nums) {
  for(let i = 0; i < nums.length; i++){
      if(isPeak(nums, i)) return i
  }
  return 0
};

console.log(findPeakElement(
[6,5,4,3,2,3,2]))
console.log(findPeakElement([1]))
console.log(findPeakElement([2,1]))
console.log(findPeakElement([1,2,3,1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
