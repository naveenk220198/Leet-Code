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

var preorderTraversal = function(root) {
    // let res = []
    // function preOrder(node) {
    //     if(!node) return 
    //     res.push(node.val)
    //     preOrder(node.left)
    //     preOrder(node.right)
    // }
    // preOrder(root)
    // return res
    let res = []
    let stack = []
    if (!root) return []
    stack.push(root)
    while(stack.length !== 0) {
        let ele = stack.pop()
        // console.log(ele)
        res.push(ele.val)
        if (ele.right !== null) {
            stack.push(ele.right)
        }
        if (ele.left !== null) {
            stack.push(ele.left)
        }
    }
    return res
};