class Solution(object):
    def maxScore(self, cardPoints, k):
        """
        :type cardPoints: List[int]
        :type k: int
        :rtype: int
        """
        n = len(cardPoints)
        lsum = 0
        rsum = 0
        maxi = 0
        for i in range(k):
            lsum += cardPoints[i]
        maxi = max(maxi, lsum)
        ri = n-1
        for i in range(k-1, -1, -1):
            lsum -= cardPoints[i]
            rsum += cardPoints[ri]
            ri-=1
            maxi = max(maxi, lsum + rsum)
        return maxi