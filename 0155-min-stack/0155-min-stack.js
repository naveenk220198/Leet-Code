
var MinStack = function() {
    this.mini = Number.MAX_SAFE_INTEGER
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        this.mini = val
        this.stack.push(val)
    }
    else {
        if (val < this.mini) {
            let ele = 2 * val - this.mini
            this.stack.push(ele)
            this.mini = val
        }
        else {
            this.stack.push(val)
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let ele = this.stack.pop()
    if (ele < this.mini) { 
        this.mini =  2 * this.mini - ele 
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let ele = this.stack[this.stack.length - 1]
    if (ele < this.mini) {
        return this.mini
    }
    else {
        return ele
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mini
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */