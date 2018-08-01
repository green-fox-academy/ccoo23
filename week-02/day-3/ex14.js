// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

// // 引入readline模块
// var readline = require('readline');

// //创建readline接口实例
// var  rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// // question方法
// rl.question("input 3 numbers",function(answer){
//     console.log("名字是："+answer);
//     // 不加close，则不会结束
//     rl.close();
// });

// // close事件监听
// rl.on("close", function(){
//    // 结束程序
//     process.exit(0);
// });


// const args = process.argv.splice(2); // Just a helper for you to get started

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function calculator(str){
    // var str = str.replace(/ /, "");
    var arr = str.split(" ");
    console.log("the input is ");
    console.log(arr);
    var num1 = parseInt(arr[1]);
    var num2 = parseInt(arr[2]);
    //console.log(num1);
    //console.log(typeof(num1));
    if(typeof(num1) != "number"){
        return "please input number1";
    }
    if(typeof(num2) != "number"){
        return "please input number2";
    }
    // if(arr[0] == "*" | "-" | "*" | "/"){
    // }else{
    //     return "please input + - * /";
    // }
    
    

    console.log(str);
    switch(arr[0]){
    case "+":
        console.log("the answer is ");
        return num1 + num2;
        break;
    case "-":
        console.log("the answer is ");
        return num1 - num2;
        break;
    case "*":
        console.log("the answer is ");
        return num1 * num2;
        break;
    case "/":
        console.log("the answer is ");
        return num1 / num2;
        break;
    default:
        return "error";
    }
}

//rl.on('line', function(line){
rl.question("input operation and 2 numbers with space within:  ",function(line){
    //console.log(line);
    console.log(calculator(line));
    rl.close(); 
})
// console.log('Input params are', args);

// module.exports = calculator;