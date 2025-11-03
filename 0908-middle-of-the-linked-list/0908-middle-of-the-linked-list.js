/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let len = 0
    let temp = head
    while (temp) {
        len++
        temp = temp.next
    }
    let mid = Math.floor(len / 2) + 1
    temp = head
    for (let i = 1; i < mid; i++) {
        temp = temp.next
    }
    return temp
    
};