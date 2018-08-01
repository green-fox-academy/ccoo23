// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
var num = [1,2,3,4,5];
var all = 0;
function sum(num){
  for (let i = 0; i < num.length; i++) {
    all =  all + num[i];
  }
  return all;
}
console.log(sum(num));
