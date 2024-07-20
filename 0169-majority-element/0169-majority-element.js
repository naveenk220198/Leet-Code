/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
//     Brute force
    let l = nums.length
    // let max = 0
    // let occ = Math.floor(l / 2)
    // for (let i = 0; i < l ; i++) {
    //     let cnt = 0
    //     for (let j = i; j < l; j++) {
    //         if (nums[j] === nums[i]) {
    //             cnt++
    //         }
    //     }
    //     if (cnt > occ) {
    //         return nums[i]
    //     }
    // }
    // return -1

// Hashing
    // let hm = new Map()
    // for (let i = 0; i < l; i++) {
    //     if (hm.has(nums[i])) {
    //         hm.set(nums[i], hm.get(nums[i]) + 1)
    //     }
    //     else {
    //         hm.set(nums[i], 1)
    //     }
    // }
    // for (const [num, key] of hm) {
    //     if (key > Math.floor(l / 2)) {
    //         return num
    //     }
    // }
    
//     Using Moores voting algo
    let cnt = 0
    let ele = 0
    for(let i = 0; i < l; i++) {
        if(cnt === 0){
            cnt = 1
            ele = nums[i]
        }
        else if (nums[i] === ele) {
            cnt++
        }
        else {
            cnt--
        }
    }
    return ele
    
    
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

// Optimal using Moores voting algorithm
//     let element = 0
//     let cnt = 0
//     for (let i =0; i<l; i++) {
//         if (cnt ==0) {
//             element = nums[i]
//             cnt++
//         }
//         else if (element == nums[i]) {
//             cnt++
//         }
//         else {
//             cnt--
//         }  
//     }
    
//     let cnt1 = 0
//     for (let j = 0; j<l; j++) {
//         if (nums[j] == element) {
//             cnt1++
//         }
//     }
//     if (cnt1 > Math.floor(l/2)) {
//         return element
//     }
//     return -1
};