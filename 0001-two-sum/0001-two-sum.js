/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hm = new Map()
    let summ = 0
    for (let i = 0; i < nums.length; i++) {
        summ = nums[i]
        prevSum =  target - summ
        if (hm.has(prevSum)){
            return [hm.get(prevSum), i]
        }
        else {
            hm.set(nums[i], i)
        }
    }
    return [-1, -1]









//     res = []
//     for (let i = 0; i< nums.length; i++) {
//         for (let j = i+1; j<nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 res.push(i)
//                 res.push(j)
//                 return res
//             }
//         }
//     }
    
// //     Better
//     let res= []
//     let hm = new Map()
//     let num = 0
//     for (let i = 0; i< nums.length; i++) {
//         num = nums[i]
//         rem = target - num
//         if (hm.has(rem)) {
//             res.push(hm.get(rem))
//             res.push(i)
//             return res
//         }
//         else {
//             hm.set(num, i)
//         }    
//     }
//     return res
// //     Optimal

//     nums.sort((a, b) => a - b);

//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         const sum = nums[left] + nums[right];

//         if (sum === target) {
//             return [nums[left], nums[right]];
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return [];
};