/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
//     Better - > get counts of all colors and modify given array
    let c_r = 0
    let c_b = 0
    let c_w = 0
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] == 0) {
            c_r++
        }
        if (nums[i] == 1) {
            c_w++
        }
        else {
            c_b++
        }
    }
    for (let i = 0; i< nums.length; i++) {
        if (c_r) {
            nums[i] = 0
            c_r --
            continue
        }
        if (c_w) {
            nums[i] = 1
            c_w--
            continue
        }
        if (c_b) {
            nums[i] = 2
            c_b--
            continue
        }
    }
};