def calSubArraysCnt(arr, k):
    n = len(arr)
    l = 0
    r = 0
    summ = 0
    cnt = 0
    if k < 0: return 0
    while r< n:
        if arr[r] % 2 == 0:
            summ += 0
        else:
            summ += 1
        while summ > k:
            if arr[l] % 2 != 0:
                summ -= 1
            else:
                summ -= 0
            l += 1
        if summ <= k:
            cnt += r-l+1
        r+=1
    return cnt

class Solution(object):
    def numberOfSubarrays(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        cnt_k = calSubArraysCnt(nums, k)
        cnt_k_1 = calSubArraysCnt(nums, k-1)
        return cnt_k - cnt_k_1