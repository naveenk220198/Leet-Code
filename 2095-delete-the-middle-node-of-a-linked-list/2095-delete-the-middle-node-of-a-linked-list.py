# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteMiddle(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        fast = head
        c = 0
        if head == None or head.next == None:
            return None
        while fast.next!=None and fast!=None:
            if c == 0:
                slow = head
                c += 1
            else:
                slow  = slow.next
            fast = fast.next.next
            if fast == None:
                break
        # print(slow.val)
        # print(fast.val)
        # deleteNode = s
        slow.next = slow.next.next
        return head
        