// - Create a variable named `animals`
//   with the following content: `['koal', 'pand', 'zebr']`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

var animals = ['koal', 'pand', 'zebr'];
var newanimals = animals.map(function(item){
    return item  + "a";
})
console.log(animals);
console.log(newanimals);
