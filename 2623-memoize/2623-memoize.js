/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    cache = {}
    return function(...args) {
        const key = String(args)
        // console.log(key)
        if (key in cache) {
            return cache[key]
        }
        else {
            const res = fn(...args)
            cache[key] = res
            return res
        }      
    }
    const sum = (x, y) => x + y
    const fib = (x) => x<=1 ? 1 : fib(x-1) + fib(x-2)
    const factorial = (x) => x<=1 ? 1 : factorial(x-1) * x
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */