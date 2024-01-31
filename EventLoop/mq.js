(function stack1() {
    console.log("Statement 1");

    setTimeout(function () {
        console.log("Statement 2");
    });

    process.nextTick(function () {
        console.log("Statement 3");
    });

    console.log("Statement 4");
})();