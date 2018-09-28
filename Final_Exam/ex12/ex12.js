//  Create a function that takes a matrix (list of lists) of numbers and
//  returns the sum of each rows as an array
function sumArr(arr) {
  let sum = 0;
  arr.map((e) => {
    sum += e;
    return sum;
  });
  return sum;
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const results = [];
const sumRow = (list) => {
  results.push(list.map((e) => {
    const result = sumArr(e);
    return result;
  }));
};
sumRow(matrix);
console.log(results);
