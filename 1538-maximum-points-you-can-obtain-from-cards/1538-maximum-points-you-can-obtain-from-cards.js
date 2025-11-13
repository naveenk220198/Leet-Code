/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let lsum = 0
    let rsum = 0
    let max_sum = 0
    let n = cardPoints.length
    for (let i = 0; i < k; i++) {
        lsum += cardPoints[i]
        max_sum = Math.max(lsum, max_sum)
    }
    let rind = n - 1
    for (let i = k - 1; i>=0; i--) {
        lsum -= cardPoints[i]
        rsum += cardPoints[rind]
        rind--
        max_sum = Math.max(lsum + rsum, max_sum)
    }
    return max_sum
};