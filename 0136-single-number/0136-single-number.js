/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     Brute
    // l = nums.length
    // if (l==1) {
    //     return nums[0]
    // }
    // for (let i=0 ; i<l; i++) {
    //     let cnt = 0
    //     // const num = nums[i]
    //     for(let j=0; j<l; j++){
    //         if (nums[j]===nums[i]) {
    //             cnt++
    //             // console.log(cnt)
    //         }
    //     }
    //     if (cnt === 1) {
    //         return nums[i]
    //     }
    // }
    
    
//     Better 
    let l = nums.length
    let m = new Map()
    for (let i = 0; i< l; i++) {
        let num = nums[i]
        m.set(num, (m.get(num) || 0) + 1)
    }
    for (let [num, count] of m){
        if (count == 1) {
            return num
        }
    }
    
};