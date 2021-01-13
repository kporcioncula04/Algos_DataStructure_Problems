//write a function called isPalindrome that takes in a string a parameter and returns T/F if the string is a valid palindrome.
//a palindrome is a word, phrase, or sequence of characters which reads the same backward as forward
//Example: 'racecar' ---> true
//do geese see god? --> true

//two pointer approach

const isPalindrome = (s) => {
  let p1 = 0;
  let p2 = s.length - 1

  while(p1 < p2){
    //we want to check if the pointer is on a valid char
    //if it is not it continues until it finds a valid one
    while(!isValidChar(s.charAt(p1))){
      p1++;
    }
    while(!isValidChar(s.charAt(p2))){
      p2--;
    }

    if(s.charAt(p1).toLowerCase() !== s.charAt(p2).toLowerCase()) return false;

    p1++;
    p2--
  }
  return true
}
const isValidChar = (char) => {
  let validate = 'abcdefghijklmnopqrstuvwxyz0123456789'

  return validate.indexOf(char.toLowerCase()) > -1
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome('race a car'))
