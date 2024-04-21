def calSubArraysLestEqualsGoal(nums, goal):
    l = 0
    r = 0
    n = len(nums)
    summ = 0
    cnt = 0
    if goal < 0: return 0
    while r<n:
        summ += nums[r]
        
        while (summ > goal):
            summ -= nums[l]
            l += 1
        if summ <= goal:
            cnt += r-l+1
        r+=1
    return cnt
class Solution(object):
    
    def numSubarraysWithSum(self, nums, goal):
        """
        :type nums: List[int]
        :type goal: int
        :rtype: int
        """
        cnt_k = calSubArraysLestEqualsGoal(nums, goal)
        cnt_k_1 = calSubArraysLestEqualsGoal(nums, goal - 1)
        return cnt_k - cnt_k_1
        # l = 0
        # r = 0
        # n = len(nums)
        # summ = 0
        # cnt = 0
        # while r<n:
        #     summ += nums[r]
        #     if summ <= goal:
        #         cnt += r-l+1
        #     else:
        #         while (summ > goal):
        #             summ -= nums[l]
        #             l += 1
        #     r+=1
        # return cntr