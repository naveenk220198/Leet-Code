/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     Brute
    l = nums.length
    if (l==1) {
        return nums[0]
    }
    for (let i=0 ; i<l; i++) {
        let cnt = 0
        // const num = nums[i]
        for(let j=0; j<l; j++){
            if (nums[j]===nums[i]) {
                cnt++
                // console.log(cnt)
            }
        }
        if (cnt === 1) {
            return nums[i]
        }
    }
    
};