//write a function called strChallenge which will contain a string as a parameter with an asterisk character splitting them evenly into two separate strings. Return a string with alternate characters from two separate strings.
//example: input -->  'abc*123' output --> 'a1b2c3'

function strChallenge(str){
  let arrStr = str.split('*')
  return merge(arrStr)
}

function merge(arr){
  let first = arr[0].split('')
  let second = arr[1].split('')
  let result = ''

  for(let i = 0; i < first.length || i < second.length; i++){
    if(i < first.length) result += first[i]
    if(i < second.length) result += second[i]
  }

  return result
}

console.log(strChallenge('aaa*bbb'))
console.log(strChallenge('ka123*uhns'))
console.log(strChallenge('984u*cakdsa'))
