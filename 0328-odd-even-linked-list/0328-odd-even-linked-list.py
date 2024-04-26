# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def oddEvenList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        arr = []
        temp = head
        if temp == None or temp.next == None:
            return temp
        while temp!= None and temp.next != None:
            arr.append(temp.val)
            temp = temp.next.next
        if temp: arr.append(temp.val)
        temp = head.next
        while temp!=None and temp.next != None:
            arr.append(temp.val)
            temp = temp.next.next
        if temp: arr.append(temp.val)
        temp = head
        for i in range(len(arr)):
            if i == 0: node = temp
            temp.val = arr[i]
            temp = temp.next
        return node
            