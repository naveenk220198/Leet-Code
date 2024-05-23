/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    let res = new Array(nums1.length).fill(-1)   
    let hashMap = new Map()
    let n = nums2.length
    for (let i=0; i<n; i++) {
        while (stack.length !== 0 && stack[stack.length - 1] < nums2[i]) {
            const popped = stack.pop();
            hashMap.set(popped, nums2[i])
        }
        stack.push(nums2[i])
    }
    for (let i=0; i<nums1.length; i++) {
        if (hashMap.has(nums1[i])) {
            res[i] = hashMap.get(nums1[i])
        }
    }
    return res
};