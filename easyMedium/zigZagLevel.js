/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
  dfs(root, level, result){
      if(!root) return;

      if(level >= result.length){
          result.push([])
      }

      result[level].push(root.val)

      this.dfs(root.left, level +1, result)
      this.dfs(root.right, level +1, result)

  }

  levelOrderTraversal(root) {
      let result = []

      this.dfs(root, 0, result)

      return result
  }
}

