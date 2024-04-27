# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        fast = head
        for i in range(1, n):
            fast = fast.next
        if fast.next == None: return head.next
        i = 0
        while fast.next!=None:
            if i==0:
                slow = head
                i = 1
            else:
                slow = slow.next
            fast = fast.next
        deleteNode = slow.next
        slow.next = slow.next.next
        return head
        
        