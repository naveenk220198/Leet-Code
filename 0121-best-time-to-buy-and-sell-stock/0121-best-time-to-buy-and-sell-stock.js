/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     Brute
    // let maxp = 0
    // for (i=0; i < prices.length ; i++) {
    //     for (j=i+1; j < prices.length; j++) {
    //        maxp = Math.max(maxp, prices[j] - prices[i])
    //     }
    // }
    // return maxp
    
//     Optimal
    let maxp = 0
    let minp = Number.MAX_SAFE_INTEGER
    for (i=0; i<prices.length; i++) {
        minp = Math.min(minp, prices[i])
        maxp = Math.max(maxp, prices[i] - minp)
    }
    return maxp
};