// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(str){
    str = str.map(function(item){
        return item + "a";
    })
    return str;
}
console.log(appendA(far));
module.exports = appendA;