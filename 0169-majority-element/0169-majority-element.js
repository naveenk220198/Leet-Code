/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let l = nums.length
//     let maj = Math.floor(nums.length / 2)
//     let cnt = 0
//     for (let i = 0; i<l; i++) {
//         cnt = 0
//         for (let j = 0; j<l; j++) {
//             if (nums[j]==nums[i]) {
//                 cnt++
               
//             }
//         }
//         if (cnt > maj) {
//             return nums[i]
//         }
//     }
//     return -1
    let hm = new Map()
    for (let i = 0; i< l; i++) {
        if (hm.has(nums[i])) {
            
            hm.set(nums[i], hm.get(nums[i]||0) + 1)
        }
        else {
            hm.set(nums[i], 1)
        }
    }
    for (const [num, count] of hm) {
        if (count > Math.floor(l/2) ) {
            return num
        }
    }
};