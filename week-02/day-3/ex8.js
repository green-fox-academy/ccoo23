// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];
console.log(boys[5]);

var newArr = [];
function min(num1, num2){
    if(num1> num2){
        return num2;
    }else{
        return num1;
    }
}
function max(num1, num2){
    if(num1< num2){
        return num2;
    }else{
        return num1;
    }
}
function makingMatches(arr1, arr2){
    let m = min(arr1.length, arr2.length);
    for(var i = 0;i< m; i++){
        newArr.push(girls[i]);
        newArr.push(boys[i]);
    }
    for(i = m; i<(max(arr1.length, arr2.length)-1); i++){
        console.log(boys[6]);
        
        if(girls[m] == "undefined"){
            newArr.push(boys[i]);
        }else{
            newArr.push(girls[i]);
        }
    }
    return newArr;
}
console.log(makingMatches(girls, boys));

module.exports = makingMatches;