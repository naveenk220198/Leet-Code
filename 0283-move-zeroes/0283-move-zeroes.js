/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    ans = []
    l = nums.length
    for (let i = 0; i < l; i++) {
        if (nums[i] !== 0) {
            ans.push(nums[i])
        }
    }
    tl = ans.length
    for (let i =tl; i< l; i++) {
        ans.push(0)
    }
    for (let i = 0; i<l; i++) {
        nums[i] = ans[i]
    }
};