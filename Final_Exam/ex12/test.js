function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const arr1 = [1, 2, 3];
const arr = sumArr(arr1);
console.log(arr);
