/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Brute force with hash array to count occurances
    // let len = 0
    // let max_len = 0
    // for(let i =0; i < s.length; i++) {
    //     let hash = new Array(256).fill(0)
    //     for (let j = i; j < s.length; j++) {
    //         if (hash[s.charCodeAt(j)] === 1) break
    //         hash[s.charCodeAt(j)] = 1
    //         len = j - i + 1
    //         max_len = Math.max(max_len, len)
    //     }
    // }

    // Sliding Window
    let l = 0
    let r = 0
    let n = s.length
    let len = 0
    let max_len = 0
    let hash = new Array(256).fill(0)
    while (l < n && r < n) {
        if (hash[s.charCodeAt(r)] == 0) {
            hash[s.charCodeAt(r)] = 1
            len = r - l + 1
            max_len = Math.max(len, max_len)
            r++
        }
        else {
            hash[s.charCodeAt(l)] = 0
            l++
        }       
    }
    return max_len
};