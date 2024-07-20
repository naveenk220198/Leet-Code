/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     let maxi = 0
//     for(let i = 0; i < prices.length; i++) {
//         for(let j =i+1; j < prices.length; j++) {
//             maxi = Math.max(maxi, prices[j] - prices[i])
//         }
        
//     }
//     return maxi

// Optimal
    let minStock = Number.MAX_SAFE_INTEGER
    let maxP = 0
    for (let i = 0; i < prices.length; i++) {
        minStock = Math.min(minStock, prices[i])
        maxP = Math.max(maxP, prices[i] - minStock)
    }
    return maxP
    // let maxp = 0
    // for (i=0; i < prices.length ; i++) {
    //     for (j=i+1; j < prices.length; j++) {
    //        maxp = Math.max(maxp, prices[j] - prices[i])
    //     }
    // }
    // return maxp
    
//     Optimal
    // let maxp = 0
    // let minp = Number.MAX_SAFE_INTEGER
    // for (i=0; i<prices.length; i++) {
    //     minp = Math.min(minp, prices[i])
    //     maxp = Math.max(maxp, prices[i] - minp)
    // }
    // return maxp
};