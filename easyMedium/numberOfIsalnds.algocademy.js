
// Number of Islands - O(n * m)

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

function numIslands(grid){
  if(grid === null || grid.length === 0){
    return 0;
  }

  let numberOfIslands = 0;

  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      let currElem = grid[i][j]

      //if it is then let's check its siblings
      if(currElem === 1){
        //why? we need to find its siblings
        numberOfIslands += getIslandCount(grid, i, j)
      }
    }
  }

  return numberOfIslands;
}

function getIslandCount(grid, i,j){
  //checking the boundaries
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
    return 0;
}

  grid[i][j] = 0

  getIslandCount(grid, i +1, j)
  getIslandCount(grid, i - 1, j)
  getIslandCount(grid, i, j +1)
  getIslandCount(grid, i, j - 1)

  return 1;
}

console.log(numIslands(
  [ [1, 1 ,0 ,0 ,0],
    [1 ,1 ,0 ,0 ,0],
    [0 ,0 ,1 ,0 ,0],
    [0 ,0 ,0 ,1 ,1]]))



//good reference: https://www.youtube.com/watch?v=cFnUDdi6DeE
