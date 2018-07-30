// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4
var all = 0;
var average = 0;
var num  = 0;
for(var i = 0; i<3; i++){
  num = prompt("input number");
  all = all + parseInt(num);
}
average = all/3;
console.log(all);
console.log(average);

