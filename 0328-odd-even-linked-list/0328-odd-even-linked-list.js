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
var oddEvenList = function(head) {
    if (!head) return null
    let first = head
    let second = head.next
    let frst_sec = second
    while (second && second.next) {
        first.next = first.next.next
        second.next = second.next.next
        first = first.next
        second = second.next
    }
    first.next = frst_sec
    return head
};