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

var diameterOfBinaryTree = function(root) {
    let maxi = 0
    function findHeight(root) {
        if (root == null) return 0
        let lh = findHeight(root.left, maxi)
        let rh = findHeight(root.right, maxi)
        maxi = Math.max(maxi, (lh+rh))
        return 1 + Math.max(lh, rh)
    }
    findHeight(root)
    return maxi
};