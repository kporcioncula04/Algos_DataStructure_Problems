//Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

function longestConsecutive(nums) {
  let result = 1
  nums.sort((first,second) => first- second)
  for(let i = 0; i < nums.length;i++){
      let currVal = nums[i]
      for(let j = i +1; j < nums.length; j++){
          if(nums[i] > currVal +1) break;
          if(nums[j] === currVal +1) {
              currVal++
          }
      }
      result = Math.max(result,currVal - nums[i] + 1)
  }
  return result
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

-----

function longestConsecutive (nums){
  if(nums === null || nums.length === 0) return 0;

  let set = new Set(nums)
  let max = 0;

  for(let num of set){
    console.log(set.has(num - 1))
    if(set.has(num - 1)) continue

    let currNum = num;
    let currMax = 1;

    while(set.has(currNum +1)){
      currMax++
      currNum++
    }

    max = Math.max(max, currMax)

  }

  return max

}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
