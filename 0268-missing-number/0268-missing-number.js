/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    l = nums.length
    if (l==1) {
        if (nums[0] == 1) {
            return 0
        }
        else {
            return 1
        }
    }
    for (let i = 1; i <= l; i++) {
        found = 0
        for (let j = 0; j < l; j++) {
            if (nums[j] == i) {
                found = 1
                break
            }
        }
        if (found == 0) {
            return i
        }
    }
    return 0
};