/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = 0
    let max_len = 0
    for(let i =0; i < s.length; i++) {
        let hash = new Array(256).fill(0)
        for (let j = i; j < s.length; j++) {
            if (hash[s.charCodeAt(j)] === 1) break
            hash[s.charCodeAt(j)] = 1
            len = j - i + 1
            max_len = Math.max(max_len, len)
        }
    }
    return max_len
};