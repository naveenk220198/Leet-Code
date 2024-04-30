/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let newVal = val
    return {
        toBe: function (val2) {
            if (val2 === newVal) {
                return true
            }
            else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function (val2) {
            if (val2 !== newVal) {
                return true
            }
            else {
                throw new Error("Equal")
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */