/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
//     Recursive approach
    if (root === null) return 0
    let lh = maxDepth(root.left)
    let rh = maxDepth(root.right)
    return 1+Math.max(lh,rh)
//     ALso can use queue to perform level order traversal BFS
    // CHECK CODE FOR MORE UNDERSTANDING
};