/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let res = 0 
    res = start ^ goal
    let cnt = 0
    while (res != 0) {
        cnt += res & 1
        res >>= 1   
    }    
    return cnt
};