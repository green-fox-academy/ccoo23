//  Create a function that takes a matrix (list of lists) of numbers and
//  returns the sum of each rows as an array
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const results = [];
function sumRow(list) {
  list.map((e, i) => {
    results[i] = sumArr(e);
    return results;
  });
}
sumRow(matrix);
console.log(results);
