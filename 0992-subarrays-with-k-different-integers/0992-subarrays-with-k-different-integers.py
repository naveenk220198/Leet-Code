from collections import defaultdict
def getSubArrayCnt(arr, k):
    d = defaultdict(int)
    cnt = 0
    n = len(arr)
    l = 0
    r = 0
    if k<0: return 0
    while r<n:
        if arr[r] not in d.keys():
            d[arr[r]] = 1
        else:
            d[arr[r]] += 1
        while len(d.keys()) > k:
            d[arr[l]] -= 1
            if d[arr[l]] == 0:
                del d[arr[l]]
            l+=1
        if len(d.keys()) <= k:
            cnt += r-l+1
        # print(r)
        r+=1
    return cnt
class Solution(object):
    def subarraysWithKDistinct(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        cnt_k = getSubArrayCnt(nums, k)
        cnt_k_1 = getSubArrayCnt(nums, k-1)
        return cnt_k - cnt_k_1