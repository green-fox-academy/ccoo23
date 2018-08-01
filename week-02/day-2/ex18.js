// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
function isOne(num, i) {
    if (num + i == 3) {
        return 1;
    } else {
        return 0;
    }
}
var matrix = new Array();
for (var i = 0; i < 4; i++) {
    matrix[i] = [isOne(0,i), isOne(1,i), isOne(2,i), isOne(3,i)];
}
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);
console.log(matrix[3]);
