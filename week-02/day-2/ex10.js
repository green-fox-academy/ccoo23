// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

var array = ["Arthur", "Boe", "Chloe"];

function swap(arr) {
    let str = arr[0];
    arr[0] = arr[2];
    arr[2] = str;
    return arr;
}

console.log(swap(array));