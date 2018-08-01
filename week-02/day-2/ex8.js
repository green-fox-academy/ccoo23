// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`

var p1 = [1, 2, 3];
var p2 = [4, 5];
function comp(arr1, arr2) {
    if (arr1.length > arr2.length) {
        console.log("the first one is longer than the second one");
    } else {
        console.log(arr1 + "the first one is not longer than the second one" + arr2);
    }
}
comp(p1, p2);