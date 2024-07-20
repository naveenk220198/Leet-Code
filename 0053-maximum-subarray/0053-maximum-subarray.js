/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
//     Optimal using Kadanes
    let sum = 0
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum > max) {
            max = sum
        }
        if(sum < 0) {
            sum = 0
        }
    }
    return max

// bRUTE - 2 LOOPS
//     if (nums.length == 1) {
//         return nums[0]
//     }
//     let max_sum = Number.MIN_SAFE_INTEGER
//     for (let i = 0; i<nums.length; i++) {
//         let summ = 0
//         for (let j=i; j<nums.length; j++) {
//             summ += nums[j]
//             // console.log(summ)
//             max_sum = Math.max(max_sum, summ)
//             // console.log(max_sum)
            
//         }
//     }
//     return max_sum

// Optimal - Kadanes Approach
//     l = nums.length
//     if (l==1) {
//         return nums[0]
//     }
//     let summ = 0
//     let maxi = Number.MIN_SAFE_INTEGER
//     for (let i = 0; i < l; i++) {
//         summ += nums[i]
//         if (summ > maxi) {
//             maxi = summ
//         }
//         if (summ < 0){
//             summ = 0
//         }
        
//     }
//     return maxi
};