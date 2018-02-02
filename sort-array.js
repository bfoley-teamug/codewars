//codewars: Sort array by string length

function sortByLength (arr) {
    return arr.sort((a, b) => a.length > b.length ? 1 :  -1);
};
