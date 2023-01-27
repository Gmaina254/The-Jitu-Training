let arr = [3, 4, 5, 33, 45, 78]

function contains(arr, num) {
    return arr.indexOf(num) !== -1;
}

console.log(contains(arr, 5));