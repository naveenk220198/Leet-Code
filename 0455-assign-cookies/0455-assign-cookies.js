/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // cookies -> s students -> g
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    let n = g.length
    let m = s.length
    let l = 0
    let r = 0
    while (l < n && r < m) {
        if (s[r] >= g[l]) {
            l++
        }
        r++
    }
    return l
};