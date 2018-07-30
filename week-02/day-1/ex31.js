const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
var w = 5;
var str = "%%%%%\n";
for(i = 1;i<= lineCount-2; i++){
  str = str + "%";
  for(var c = 1; c<= w-2; c++){
     str = str + " ";
   }
  str = str + "%\n";
}
var str = str + "%%%%%";
console.log(str);
