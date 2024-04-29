# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        temp = headA
        cnt = 0
        while temp != None:
            cnt+=1
            temp = temp.next
        cnt+=1
        temp = headB
        cntB = 0
        while temp != None:
            cntB+=1
            temp = temp.next
        cntB+=1
        res = cnt - cntB
        # print(abs(res))
        p1 = headA
        p2 = headB
        if res < 0:
            for i in range(abs(res)):
                p2 = p2.next
        else:
            for i in range(abs(res)):
                p1 = p1.next
        # print(p2.val)
        # print(p1.val)
        while p1!=None and p2!=None:
            if (p1 == p2):
                return p1 or p2
            else:
                p1 = p1.next
                p2 = p2.next
        return None
            