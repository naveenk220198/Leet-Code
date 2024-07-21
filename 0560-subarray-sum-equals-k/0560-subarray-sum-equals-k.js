/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let hm = new Map()
    let cnt = 0
    let summ = 0
    let prev = 0
    hm.set(0, 1)
    for (let i=0; i < nums.length; i++) {
        summ += nums[i]
        prev = summ - k
        if (hm.has(prev)) {
            cnt += hm.get(prev)
        }
        if (hm.has(summ)) {
            hm.set(summ, hm.get(summ) + 1)
        }
        else {
            hm.set(summ, 1)
        }
    }
    return cnt
};