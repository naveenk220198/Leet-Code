/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let s = new Set(nums)
    let uniqueArr = Array.from(s)
    console.log(uniqueArr.length)
    for (let i = 0; i<uniqueArr.length; i++) {
        nums[i] = uniqueArr[i]
    }
    return uniqueArr.length
    // console.log(uniqueArr)
};