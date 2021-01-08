const getSum = (a,b) =>{
  // return a + b
  let carry;
  while((a&b) !== 0){
    carry = (a & b) << 1;
    a = a^b
    b = carry;
  }
  return a ^ b
}

console.log(getSum(5, 2))

