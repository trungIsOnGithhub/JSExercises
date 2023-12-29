const findVowels = function(string) {
    let count = 0;
    if (!string.length) {
        return 0;
    }

    const added = "aeiou".indexOf(string.at(0)) >= 0 ? 1 : 0;

    return added + findVowels(string.slice(1));
}

console.log(findVowels("aeiio???u"));