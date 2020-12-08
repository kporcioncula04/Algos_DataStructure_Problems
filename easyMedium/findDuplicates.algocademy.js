function findDuplicates(arr){
  let map = {}
  let results = []
  for(let num of arr){
    if(!map[num]) map[num] = 1
    else map[num] += 1
  }

  for(let val in map){
    console.log(map[val])
    if(map[val] >= 2){
      results.push(val)
    }
  }

  return results

}


console.log(findDuplicates([2, 3, 1, 1, 4, 3, 2, 1]))

