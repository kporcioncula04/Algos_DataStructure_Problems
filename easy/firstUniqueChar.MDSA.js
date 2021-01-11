// const firstUniqChar = (s) => {
//   for (let i = 0; i < s.length; ++i) if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
//   return -1;
// };


const firstUniqChar = (s) => {
    let map = {}

    for(let val of s){
    map[val] = (map[val] || 0) + 1
    }

    for(let val in map){
      if(map[val] === 1){
        return s.indexOf(val)
      }
    }
    return -1
};

console.log(firstUniqChar('leetcode'))
