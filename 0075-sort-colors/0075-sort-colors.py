class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        low = 0
        mid = 0
        high = len(nums) - 1
        
        while(mid <= high):
            if(nums[mid] == 0):
                temp = nums[low]
                nums[low] = nums[mid]
                nums[mid] = temp
                mid+=1
                low+=1
            elif(nums[mid] == 2):
                temp = nums[high]
                nums[high] = nums[mid]
                nums[mid] = temp
                high-=1
            elif(nums[mid] == 1):
                mid+=1
            
        return nums