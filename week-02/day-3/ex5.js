// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
var text2 = " - Download games\n";
var text3 = "    ";
var text4 = " - Diablo";
todoText = todoText.concat(text2, text3, text4);
console.log(todoText);