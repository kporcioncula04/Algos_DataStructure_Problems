// function isValidCell(grid, row, col){
//   if(grid[row] != null && grid[row][col] != null){
//       return grid[row][col]
//   }
//   return false
// }
// function dfs(grid, row, col){
//   if(!isValidCell(grid, row, col)){
//       return;
//   }
//   grid[row][col] = 0
//   let directions =  [[-1, 0], [1, 0], [0, -1], [0, 1]]

//   for(let [i,j] of directions){
//       dfs(grid, row +i, col +j)
//   }

// }
// function numIslands(grid) {
//   let result = 0;
//   for(let i = 0; i < grid.length; i++){
//       for(let j = 0; j < grid[0].length; j++){
//           if(grid[i][j] === 1 ){
//               result++
//               dfs(grid, i,j)
//           }
//       }

//   }
//   return result
// }



function numIslands(grid){
  if(grid === null || grid.length === 0){
    return 0;
  }

  //let numberOfIslands = 0;
  let arrIslands = []

  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      let currElem = grid[i][j]

      //if it is then let's check its siblings
      if(currElem === 1){
        //why? we need to find its siblings
       // numberOfIslands += getIslandCount(grid, i, j)

        arrIslands.push(getIslandCount(grid, i ,j ))
      }
    }
  }

  return arrIslands
  //return numberOfIslands;
}

function getIslandCount(grid, i,j){
  // let arr = []

  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
    return 0;
}
  let count = 0
  grid[i][j] = 0

  getIslandCount(grid, i +1, j)
  getIslandCount(grid, i - 1, j)
  getIslandCount(grid, i, j +1)
  getIslandCount(grid, i, j - 1)

  return count
}
console.log(
  numIslands(
  [
    [1, 1, 0, 0 ,0],
    [1, 1, 0, 0, 0],
    [0, 0 ,1, 0 ,0],
    [0, 0, 0 ,1 ,1]
]))


  // console.log(numIslands(
  //   [[1, 1, 1, 1 ,0],
  //   [1, 1, 0, 1,0],
  //   [1, 1 , 0 ,0 ,0],
  //   [0, 0, 0 ,0 ,0]]))
