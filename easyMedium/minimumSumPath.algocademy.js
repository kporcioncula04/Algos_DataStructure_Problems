// function minPathSum(grid, i, j){
//   if(i >= grid.length || j >= grid[0].length){
//       return Number.MAX_VALUE
//   }
//   if(i === grid.length - 1 && j === grid[0].length - 1 ){
//       return grid[i][j]
//   }
//   let sum = grid[i][j] + Math.min(minSum(grid,i+1,j), minSum(grid,i, j+1))
//   return sum
// }
// function minPathSum(grid) {
//   let val = minSum(grid, 0, 0)
//   return val
// }

function minPathSum(grid){
  let n = grid.length
  let m = grid[0].length

  //distance in the first col
  for(let i = 1; i < n; i++){
    grid[i][0] += grid[i-1][0]
  }

  //distance in the first row
  for(let j = 1; j < m; j++){
    grid[0][j] += grid[0][j -1]
  }

  //iterate through the rest of the row and col
  //find the min value that will allow us to travel in up until the bottom right path
  //we already found the values on the first row and col

  for(let i = 1; i < n; i++){
    for(let j = 1; j < m; j++){
      grid[i][j] += Math.min(grid[i -1][j], grid[i][j -1])
    }
  }

  return grid[n-1][m-1]
}

console.log(minPathSum([
[1,3,1],
[1,5,1],
[4,2,1]
]))
