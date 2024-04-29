# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        sum = 0
        carry = 0
        dummyNode = ListNode(-1)
        curr = dummyNode
        while l1!=None or l2!=None:
            if l1 and l2:
                sum += l1.val + l2.val
            elif l1:
                sum += l1.val
            else:
                sum += l2.val
            print(sum)
            if sum>= 10:
                carry = 1
            else:
                carry = 0
            sum %= 10
            newNode = ListNode(sum)
            # print(newNode.val)
            curr.next = newNode
            curr = curr.next
            sum = carry
            # print(curr.val)
            if l1: l1=l1.next
            if l2: l2=l2.next
        if carry: 
            newNode = ListNode(carry)
            curr.next = newNode
        return dummyNode.next
                    
        