class Solution(object):
    def numberOfSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        cnt = 0
        hashArr = [-1]*3
        for i in range(len(s)):
            hashArr[ord(s[i])-ord('a')] = i
            if hashArr[0] != -1 and hashArr[1] != -1 and hashArr[2] != -1:
                cnt += 1+min(hashArr)
        return cnt