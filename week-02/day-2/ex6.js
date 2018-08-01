// - Create a function called `printParams`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
var params = new Array;
function printParams(params) {
    for (var i = 0; i < arguments.length; i++) {
        params = params + " " + arguments[i];
    }
    return params;
}

console.log(printParams(1, 2, "aaa", "asd"));
