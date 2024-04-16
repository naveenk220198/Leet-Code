class Solution(object):
    def largestOddNumber(self, num):
        """
        :type num: str
        :rtype: str
        """
        i_num = int(num)
        # print(num)
        # return 0
        for i in range(len(num)):
            if (i_num % 2 == 0):
                i_num = i_num // 10
            else:
                return str(i_num)
        return ""