var containsDuplicate = function(nums) {
  if(nums.length < 1){
      return false;
  }

  for(let i = 0; i < nums.length;i++){
      console.log(nums[i])
      let j = i + 1;
      while(j < nums.length){
          if(nums[i] === nums[j]){
              return true
          }
          j++;
      }
  }
  return false;
};


// var containsDuplicate = function(nums) {
//   var obj = {};

//   for(var i = 0; i < nums.length; i++){
//       obj[nums[i]] = obj[nums[i]] + 1 || 1;

//       if(obj[nums[i]] > 1) return true;
//   }

//   return false;
// };

console.log(containsDuplicate([1,2,3,1]))
