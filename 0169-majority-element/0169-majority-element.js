/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let l = nums.length
    let maj = Math.floor(nums.length / 2)
    let cnt = 0
    for (let i = 0; i<l; i++) {
        cnt = 0
        for (let j = 0; j<l; j++) {
            if (nums[j]==nums[i]) {
                cnt++
               
            }
        }
        if (cnt > maj) {
            return nums[i]
        }
    }
};