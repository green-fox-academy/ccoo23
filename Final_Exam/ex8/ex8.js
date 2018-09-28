//  Create a function that takes two arrays and mixes them like this:
//  [1, 2, 3] and [6, 7, 8] becomes [1, 6, 2, 7, 3, 8]
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
function mixes(arrayOne, arrayTwo) {
  for (let i = arrayOne.length; i > 0; i -= 1) {
    arrayOne.splice(i, 0, arrayTwo[i - 1]);
  }
}
mixes(array1, array2);
console.log(array1);
