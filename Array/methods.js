const array = [1, null, "96", NaN, -68, 9.6, {}];
let temp = [];

// iterate
array.forEach(
    item => {
        console.log(item + " with type " + typeof item);
    }
);

// filter NaN
temp = array.filter(
    item => typeof item === "number" && item !== item
);
console.log(temp);

// map to string
temp = array.map(
    item => new String(item)
);
console.log(temp);

// reverse only the number type in array
temp = array.reduce(
    (accum, item) => {
        if (typeof item === "number" && !isNaN(item))
            accum.unshift(item);
        return accum;
    }, []
);
console.log(temp);