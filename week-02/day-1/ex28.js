const lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
var str = "";
 for(var i = 0; i < 4; i++){
   for(var c = 0; c <= i; c++){
     str = str + "*";
   }
   str = str + "\n";
 }

 console.log(str);
