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
var inorderTraversal = function(root) {
    // let res = []
    // function inOrder(node) {
    //     if (node) {
    //         inOrder(node.left)
    //         res.push(node.val)
    //         inOrder(node.right)
    //     }
    //     else return
    // }
    // inOrder(root)
    // return res
    let res = []
    let stack = []
    let current = root
    while (current !=null || stack.length > 0) {
        while(current!=null) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        res.push(current.val)
        current = current.right
    }
    return res
};