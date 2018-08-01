//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

var arr = [1, 11, 34, 11, 52, 61, 1, 34];
function unique(arr) {
    //unique[0] = arr[0];
    for (var i = 0; i < arr.length; i++) {
        for (var c = i + 1; c < arr.length; c++) {
            if (arr[i] == arr[c]) {
                arr[i] = null;
            } continue;
        }
    }
    return arr.filter(item => item != null);;
}
console.log(unique(arr));
