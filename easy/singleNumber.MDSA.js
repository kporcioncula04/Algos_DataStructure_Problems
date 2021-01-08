//  const singleNumber = (nums) => {
//   let map = {}

//   for(let val of nums){
//       map[val] = (map[val] || 0) + 1
//   }

//   for(let val in map){
//       if(map[val] === 1){
//           return val
//       }
//   }

// }

// const singleNumber = (nums) => {
//   let newSet = new Set()

//   for(let val of nums){
//     if(newSet.has(val)){
//       newSet.delete(val)
//     } else {
//       newSet.add(val)
//     }
//   }

//   return Array.from(newSet)[0]
// }

//linear time
//Time o(n)
//space o(n)

const singleNumber = (nums) => {
  let result = 0;

  for(let val of nums){
    result ^= val
  }

  return result
}

//time o(n)
//space o(1)
console.log(singleNumber([4,1,2,1,2]))

//good reference: https://www.youtube.com/watch?v=XzQSPg6LFyY&feature=youtu.be
