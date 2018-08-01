// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`
var params = [];
var magicNumbers = [1, 3, 5, 7];
function third(arr) {
  for (var i = 0; i < 3; i++) {
    params[i] = arr[i];
  }
  return params[2];
}

console.log(third(magicNumbers));
