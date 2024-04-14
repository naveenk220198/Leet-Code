def findIfExist(mat, target):
        low = 0
        high = len(mat) - 1
        # print(mat)
        while low<= high:
            mid = low + (high-low)//2
            if (mat[mid]==target):
                return True
            elif (mat[mid] > target):
                high = mid -1
            else:
                low = mid + 1
        return False
class Solution(object):
    
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        n= len(matrix[0])
        # print(n)
        for i in range(len(matrix)):
            if (matrix[i][0] <= target or matrix[i][n-1] >= target):
                doesExist = findIfExist(matrix[i], target)
                if (doesExist):
                    return 1
        return 0
        