'use strict';

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    if ( this.length &&
        typeof(this.length) === "number" ) {
        return this[this.length-1];
    }

    return -1;
}

console.log([1, null, {}, 68].last());
console.log([].last.call([1, null, {}, 69]));