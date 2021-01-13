function twoSum(num, target){
  let hash = {}

  for(let i = 0; i < num.length; i++){
    let elem = num[i]
    if(!hash[elem]) {
      hash[elem] = i
    }
  }

  for(let val in hash){
    let comp = target - val
    if(hash[comp]){
      return [hash[val], hash[comp]]
    }
  }

  return [1,-1]

}

//time o(n)
//space o(n)
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2,7,11,15], 10))
