/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

// Brute force
    // n = height.length
    // let res = 0
    // for (let i = 0; i < n; i++) {
    //     let leftMax = 0
    //     let rightMax = 0
    //     for (let j = 0; j<=i; j++) {
    //         leftMax = Math.max(leftMax, height[j])
    //     }
    //     for (let k=i; k<n; k++) {
    //         rightMax = Math.max(rightMax, height[k])
    //     }
    //     res += Math.min(leftMax, rightMax) - height[i]
    // }
    // return res
    // prefix sum & suffix sum to reduce calculation of
    // leftmax and rightmax to O(1)
    let res = 0 
    let leftMax = 0
    let rightMax = 0
    let n = height.length
    let prefix = Array(height.length).fill(0)
    let suffix = Array(height.length).fill(0)
    prefix[0] = height[0]
    suffix[n-1] = height[n-1]
    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(prefix[i-1], height[i])
    }
    for (let i = n-2; i >= 0; i--) {
        suffix[i] = Math.max(suffix[i+1], height[i])
    }
    for (let i = 0; i<n; i++) {
        res += Math.min(prefix[i], suffix[i]) - height[i]
    }
    return res
};