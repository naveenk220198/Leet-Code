/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for (let c=0; c<s.length; c++) {
        if (s[c] === '(' || s[c] === '{' || s[c] === '[') {
            stack.push(s[c])
        }
        else {
            if (stack.length === 0) {
                return false
            }
            let close = s[c]
            let ele = stack.pop()
            if ((ele === "(" && close === ")") || (ele === "[" && close === "]") || (ele === "{" &&              close === "}")) {
                continue
            }
            else {
                return false
            }
        }
    }
    if (stack.length != 0) {
        return false
    }
    return true
};