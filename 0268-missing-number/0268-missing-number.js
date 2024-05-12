/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    l = nums.length
    
//     Brute - using two loops to check if number exists in array itself
    // if (l==1) {
    //     if (nums[0] == 1) {
    //         return 0
    //     }
    //     else {
    //         return 1
    //     }
    // }
    // for (let i = 1; i <= l; i++) {
    //     found = 0
    //     for (let j = 0; j < l; j++) {
    //         if (nums[j] == i) {
    //             found = 1
    //             break
    //         }
    //     }
    //     if (found == 0) {
    //         return i
    //     }
    // }
    // return 0



    // Better approach using hash array 
    // let hash = new Array(l+1).fill(0)
    // for (let j=0; j< l; j++) {
    //     hash[nums[j]]++
    // }
    // for (let j = 0; j < hash.length; j++) {
    //     if (hash[j]==0) {
    //         return j
    //     }
    // }

//     Optimal - O(2N)
    // let xor1 = 0
    // for (let i = 1; i<=nums.length; i++) {
    //     xor1 = xor1 ^ i
    // }
    // let xor2 = 0
    // for (let j = 0; j<nums.length; j++) {
    //     xor2 = xor2 ^ nums[j]
    // }
    // return xor1 ^ xor2
    
//     Optimal - O(N)
    let xor1 = 0 
    let xor2 = 0
    for (let i=0; i <nums.length; i++) {
        xor1 = xor1 ^ i+1
        xor2 = xor2 ^ nums[i]
    }
    // xor1 = xor1 ^ (nums.length)
    return xor1 ^ xor2
};