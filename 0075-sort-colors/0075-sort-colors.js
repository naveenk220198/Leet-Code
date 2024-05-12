/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
//     Better - > get counts of all colors and modify given array
    // let c_r = 0
    // let c_b = 0
    // let c_w = 0
    // for (let i = 0; i< nums.length; i++) {
    //     if (nums[i] == 0) {
    //         c_r++
    //     }
    //     if (nums[i] == 1) {
    //         c_w++
    //     }
    //     else {
    //         c_b++
    //     }
    // }
    // for (let i = 0; i< nums.length; i++) {
    //     if (c_r) {
    //         nums[i] = 0
    //         c_r --
    //         continue
    //     }
    //     if (c_w) {
    //         nums[i] = 1
    //         c_w--
    //         continue
    //     }
    //     if (c_b) {
    //         nums[i] = 2
    //         c_b--
    //         continue
    //     }
    // }
    
    
//     Optimal  - National flag algo, 3 pointer
    let left = 0
    let mid = 0
    let high = nums.length - 1
    let temp
    while(mid <= high) {
        if (nums[mid] == 0) {
            temp = nums[mid]
            nums[mid] = nums[left]
            nums[left] = temp
            mid++
            left++
        }
        else if(nums[mid] == 1) {
            mid++
           
        }
        else {
            temp = nums[mid]
            nums[mid] = nums[high]
            nums[high] = temp
            high--
        }
    }


};