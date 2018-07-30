//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

/*function substr(str, keyword) {
    return -1;
}

//  Example
console.log(substr('this is what I\'m searching in', 'searching'));
// should print: `17`
console.log(substr('this is what I\'m searching in', 'not'));
// should print: `-1`
*/
function substr(str, keyword){
  var position = 0;
  position = str.indexOf(keyword);
  return position;
}
console.log(substr("wow , this is what I\'m searching in blah blah" , "searching"));
