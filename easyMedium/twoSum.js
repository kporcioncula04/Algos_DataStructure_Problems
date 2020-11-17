// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input will have at most one solution, and you may not use the same index twice.

// In case no solution exists, return [-1, -1]

function twoSum(arr, target){

  let map = {}

  for(let i = 0; i < arr.length; i++){
    let currElem = arr[i]
    let comp = target - currElem

    if(comp in map){
      return [i, map[comp]]
    }

    map[currElem] = i
  }

  return [-1,-1]

}
console.log(twoSum([2, 7, 11, 15],9))

