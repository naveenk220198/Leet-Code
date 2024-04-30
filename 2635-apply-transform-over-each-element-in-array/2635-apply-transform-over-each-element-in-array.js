/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let x = fn
    res = []
    let i
    for (i = 0; i<arr.length; i++) {
        res.push(x(arr[i], i))
    }
    return res
};