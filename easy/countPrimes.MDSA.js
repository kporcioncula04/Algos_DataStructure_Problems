//write a function called countPrimes that takes in a number as a parameter that returns the number of prime numbers within that range of numbers
//example:
//n = 10, --> return 4
//4 prime numbers less than 10, 2, 3, 5, 7

const countPrimes = (n) => {
  let nums = [...Array(n).keys(n)]

  for(let i = 2; i * i < n; i++){
    if(nums[i] !== 'nope'){
      for(let j = i*i; j < n; j += i){
        nums[j] = 'nope'
      }
    }
  }

  return nums.filter(n => n > 1).length
}

console.log(countPrimes(10))


// https://leetcode.com/problems/count-primes/
//https://medium.com/javascript-in-plain-english/algorithms-101-count-primes-in-javascript-97f1ff85e040
