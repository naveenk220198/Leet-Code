/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let len = nums.length
    let subsets = 2**len - 1
    let ans = []
    for (let i = 0; i <= subsets; i++) {
        let res = []
        for (let j = 0; j < len; j++) {
            if (i & (1<<j)) {
                res.push(nums[j])
            }
        }
        ans.push(res)
    }
    return ans
    
};

// function subsets(nums) {

//     let result = [[]];

//     nums.forEach(num => {

//         const currentLength = result.length;

//         for (let i = 0; i < currentLength; i++) {

//             const newSubset = result[i].concat(num);

//             result.push(newSubset);
//         }
//     });
    
//     return result;
// }
