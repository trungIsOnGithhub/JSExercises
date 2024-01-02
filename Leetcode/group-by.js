/**
 * @param {Function} fn
 * given fn(item) => key : string
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const kvMap = new Map();

    this.forEach((item) => {
        const key = fn(item)

        if (!kvMap.has(key))
            kvMap.set(key, [])

        kvMap.get(key).push(item)
    });

    return Object.fromEntries(kvMap)
};

/**
 * console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
 */
