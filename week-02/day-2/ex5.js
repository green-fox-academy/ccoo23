// - Create a function called `factorio`
//   that returns it's input's factorial
var all = 1;
function factorio( input) {
  if (input < 0) {
    console.log("<0, doesn't exsit");
  } else if (input == 0) {
    console.log("=0, " + 1);
    return 1;
  } else if(input > 0){
    for (var i = 1; i <= input; i++) {
      all = all * i;
    }
    return all;
  }

}

console.log(factorio(6));
