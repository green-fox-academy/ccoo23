// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
const line = 8;
var str = "";
for(var i = 1; i<=line; i++){
  if(i%2 == 0){
    str = str + " ";
  }
  /*for(var c = 1; c<=line; c++){
    var d = c+i;
    if(c%2 == 0){
      str  = str + " ";
    }else{
      str = str + "%";
    }*/
    str = str + "% % % %\n";
}
console.log(str);
