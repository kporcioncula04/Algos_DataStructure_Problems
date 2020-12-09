function twoSum(arr, target){
  let mid = Math.floor(arr.length / 2)
  let comp = target - arr[mid]
  let idx = arr.indexOf(comp)

  if(!arr.includes(comp)){
    return [-1,-1]
  }
 return [mid, idx]
}

console.log(twoSum([-6,-1,2,3,4,7,9], 20))
