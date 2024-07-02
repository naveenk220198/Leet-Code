/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // let stack = []
    // let res = new Array(nums1.length).fill(-1)   
    // let hashMap = new Map()
    // let n = nums2.length
    // for (let i=0; i<n; i++) {
    //     while (stack.length !== 0 && stack[stack.length - 1] < nums2[i]) {
    //         const popped = stack.pop();
    //         hashMap.set(popped, nums2[i])
    //     }
    //     stack.push(nums2[i])
    // }
    // for (let i=0; i<nums1.length; i++) {
    //     if (hashMap.has(nums1[i])) {
    //         res[i] = hashMap.get(nums1[i])
    //     }
    // }
    // return res

    let stack = [];
    let res = new Array(nums2.length).fill(-1); // Initialize result array with -1
    let res2 = []
    let n = nums2.length;

    for (let i = n - 1; i >= 0; i--) {
        // while (stack.length !== 0 && nums1[i % n] > nums2[stack[stack.length - 1]]) {
        //     const popped = stack.pop();
        //     res[popped] = nums2[i % n];
        // }
        // if (i < n) {
        //     stack.push(i);
        // }
        if (stack.length === 0) {
            res[i] = -1
            stack.push(nums2[i])
        }
        else {
            while (stack[stack.length - 1] < nums2[i]) {
                stack.pop()
            }
            if (stack.length) {
                res[i] = stack[stack.length - 1]
                stack.push(nums2[i])
            }
            else {
                res[i] = -1
                stack.push(nums2[i])
            }
        }
        
    }
    for (let i = 0; i < nums1.length; i++) {
        let ele = nums1[i]
        let index = nums2.indexOf(ele)
        res2[i] = res[index]
    }
    return res2;
};