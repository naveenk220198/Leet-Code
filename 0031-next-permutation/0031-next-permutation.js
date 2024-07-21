/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length
    let index = -1
    for (let i = n-2; i>=0 ; i--) {
        if (nums[i] < nums[i+1]){
            index = i
            break
        }
    }
    // console.log(index)
    if (index === -1) {
        nums.reverse()
        return nums
    }
    for (let j = n-1; j >= 0; j--) {
        if (nums[j] > nums[index]) {
            [nums[j], nums[index]] = [nums[index], nums[j]]        
            break
        }
    }
    // console.log(index)
    let left = index + 1
    let right = n - 1
    while (left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
    return nums
    
};