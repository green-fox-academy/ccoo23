const lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
var w = 5;
var str = "%%%%%\n";
for(i = 1;i<= lineCount-2; i++){
  str = str + "%";
  var count = 1;
  for(var d = 1; d<=3; d++){
    if(d == i){
      str = str + "%";
    }else{
      str = str + " ";
    }
  }
  str = str + "%\n";
}
var str = str + "%%%%%";
console.log(str);
