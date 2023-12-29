(function () {
    var var1 = var2 = 68;
})();

console.log("var1 is unreachable!");
console.log("var2: " + var2);
console.log(`(global)this.var2: ${this.var2} will be ${var2} in browser.`);