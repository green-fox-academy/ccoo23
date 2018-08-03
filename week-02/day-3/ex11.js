// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers = [1, 2, 3, 4, 5, 6, 9];
// console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
function check1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "7") {
      return "Hoorray";
        }
    }
    return "nooooo";
}

function check2(arr) {
    var str = arr.join();
    if (str.indexOf("7") != -1) {
        return "Hoorray";
    } else {
        return "Noooooo";
    }
}
console.log(check1(numbers));
console.log(check2(numbers));

// module.exports = containsSeven;