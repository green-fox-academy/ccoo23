
// var arr2 = ['a' , 'b'];
// var s = `'${arr2[1]}'`;
// console.log(s);
// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers = [1, 2, 3, 4, 5, 6, 7];
function checkSeven(arr) {
    return arr.includes(9);    
  }
  console.log(aaa(numbers));
// console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
// function check1(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "7") {
//       return "Hoorray";
//         }
//     }
//     return "nooooo";
// }

// function check2(arr) {
//     var str = arr.join();
//     if (str.indexOf("7") != -1) {
//         return "Hoorray";
//     } else {
//         return "Noooooo";
//     }
// }
// console.log(check1(numbers));
// console.log(check2(numbers));

function aaa(arr) {
  return arr.includes(9);    
}
console.log(aaa(numbers));