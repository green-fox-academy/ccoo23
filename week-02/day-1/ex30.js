const reallineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
var lineCount = Math.floor(reallineCount/2) + 1;
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
for(i = 1; i<= Math.floor(reallineCount/2); i++){
  for(c = 1; c<= i; c++){
    str = str + " ";
    //console.log("i = " + i);
    //console.log("w = " + w);
  }
  for(c = 1; c<= w-(2*i); c++){
    str = str + "*";
  }
  for(c = 1; c<= i; c++){
    str = str + " ";
  }
  str = str + "\n";
}
console.log(str);
