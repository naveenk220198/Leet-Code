/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverseIt (arr, left, right) {
    let temp = null
    // console.log(left)
    // console.log(right)
    // console.log(arr)
    while (left <= right) {
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
}
var rotate = function(nums, k) {
    if (nums.length == 1) {
        return nums
    }
    k = k % nums.length
    l = nums.length
    // arr = []
    // arr = nums.slice(l-k, l)
    reverseIt(nums, l-k, l-1)
    reverseIt(nums, 0, l-k-1)
    // reverseIt(nums, 0, l-1)
    nums.reverse()
};