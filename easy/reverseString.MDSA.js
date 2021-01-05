//write a function reverse that takes an array of string as a parameter. It should return the reverse version by modifying it in place.

// function reverse(s){
//   return s.reverse()
// }

// const reverse = (s) => {
//   let start = 0, end = s.length - 1

//   while(start <= end){
//     [s[start], s[end]] = [s[end], s[start]]
//     start++;
//     end--
//   }
//   return s
// }

const reverse = (s) => {
  reverseStr(0, s.length - 1)

  function reverseStr(i,j){
    if( i >= j) return;
    [s[i], s[j]] = [s[j], s[i]]
    reverseStr(i +1, j -1)
  }
  return s
}

let arr =  ["h","e","l","l","o"]
console.log(reverse(arr))


// var reverseString = function(s) {
//   let start = 0, end = s.length - 1;

//   while (start <= end) {
//       [s[start], s[end]] = [s[end], s[start]];
//       start++;
//       end--;
//   }
// };
