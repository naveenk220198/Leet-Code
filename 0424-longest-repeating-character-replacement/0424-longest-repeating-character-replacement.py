class Solution(object):
    def characterReplacement(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        l = 0
        r = 0
        arr = [0] * 26
        n = len(s)
        max_len=0
        max_freq = 0
        while r<n :
            index = ord(s[r]) - ord('A')
            arr[index]+=1
            max_freq = max(arr)
            if r-l+1 - max_freq > k:
                arr[ord(s[l]) - ord('A')]-=1
                l+=1
            elif r-l+1 - max_freq <= k:
                max_len = max(max_len, r-l+1)
            r+=1
        return max_len
