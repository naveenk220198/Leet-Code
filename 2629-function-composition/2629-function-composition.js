/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let res
    if (functions.length < 1) {
        return function(x) {
            return x
        }
    }
    else {
        return function(x) {
        res = functions[functions.length-1](x)
        for (let i = functions.length-2; i>-1; i--) {
            res = functions[i](res)
        }
        return res
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */