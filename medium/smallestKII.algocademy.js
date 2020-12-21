function kSmallest(nums, k) {
  nums.sort((first,second) => first - second)
  return nums.slice(0,k)
}

console.log(kSmallest([5, 9, 3, 6, 2, 1, 3, 2, 7, 5],4))
