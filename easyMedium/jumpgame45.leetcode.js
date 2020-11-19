function minJumps(nums, i){
    if(i === nums.length - 1) return 0
    let result = nums.length
    for(let j = i+ 1; j < nums.length && j <= i + nums[i]; j++){
      result = Math.min(result, 1 + minJumps(nums,j))
    }
    return result
}
function jump(nums) {
    return minJumps(nums,0)
}

console.log(jump([2,3,1,1,4]))



//good explanation: https://www.youtube.com/watch?v=u8vVqcBsHTE
