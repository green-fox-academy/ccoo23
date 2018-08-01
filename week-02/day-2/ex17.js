// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console
var all = 0;
var ai = [3, 4, 5, 6, 7];
function sum(arr){
    for (let i = 0; i < arr.length; i++) {
         all = all + arr[i];     
    }
    return all;
}
console.log(sum(ai));