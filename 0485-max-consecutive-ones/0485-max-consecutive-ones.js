/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
    cnt = 0
    maxi = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1){
            cnt++
        }
        else {
            maxi = Math.max(cnt, maxi)
            cnt = 0
        }
    }
    return Math.max(cnt, maxi)
};