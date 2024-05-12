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



// Better using hashing
//     let hm = new Map()
//     for (let i = 0; i< l; i++) {
//         if (hm.has(nums[i])) {
            
//             hm.set(nums[i], hm.get(nums[i]||0) + 1)
//         }
//         else {
//             hm.set(nums[i], 1)
//         }
//     }
//     for (const [num, count] of hm) {
//         if (count > Math.floor(l/2) ) {
//             return num
//         }
//     }

// Optimal using Moored voting algorithm
    let element = 0
    let cnt = 0
    for (let i =0; i<l; i++) {
        if (cnt ==0) {
            element = nums[i]
            cnt++
        }
        else if (element == nums[i]) {
            cnt++
        }
        else {
            cnt--
        }  
    }
    
    let cnt1 = 0
    for (let j = 0; j<l; j++) {
        if (nums[j] == element) {
            cnt1++
        }
    }
    if (cnt1 > Math.floor(l/2)) {
        return element
    }
    return -1
};