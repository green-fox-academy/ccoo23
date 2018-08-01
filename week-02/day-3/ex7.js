// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

const planetList = ['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

function putSaturn(str){
    str[planetList.indexOf("Neptune")] = "Saturn";
    return str;
}

console.log(planetList.indexOf("Neptune"));

console.log(putSaturn(planetList));

module.exports = putSaturn;