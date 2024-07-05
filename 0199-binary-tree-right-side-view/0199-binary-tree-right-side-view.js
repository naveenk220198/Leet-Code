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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = []
    let line = 0
    function rightSide(node, line) {
        if (node === null) return
        if (line === res.length) res.push(node.val)
        rightSide(node.right, line + 1)
        rightSide(node.left, line + 1)
    }
    rightSide(root, line)
    return res
    
};