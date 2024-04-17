class Solution(object):
    def maxDepth(self, s):
        """
        :type s: str
        :rtype: int
        """
        maxi = 0
        c = 0
        for i in s:
            if i == "(":
                c+=1
            elif i == ")":
                maxi = max(c, maxi)
                c-=1
        return maxi
                
        