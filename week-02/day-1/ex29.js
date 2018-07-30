const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
var str = "";
var w = 2*lineCount-1;
for(var i = 1; i <= lineCount; i++){
  for(var c = 1; c <= lineCount-i; c++){
    str = str + " ";
  }
  for(c = 0; c < w-2*(lineCount-i);c++){
    str = str + "*";
  }
  for(var c = 1; c <= lineCount-i; c++){
    str = str + " ";
  }
  str = str + "\n";
}
console.log(str);
