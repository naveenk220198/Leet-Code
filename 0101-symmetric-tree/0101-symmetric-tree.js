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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true
    function isMirror(left, right) {
        if (!left && !right) return true
        if (!left || !right) return false
        return (left.val === right.val) && isMirror(left.right, right.left) && isMirror(left.left, right.right)
    }
    return isMirror(root.left, root.right)
};