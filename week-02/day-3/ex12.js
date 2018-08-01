// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
var count = 0;
var length = listOfNumbers.length;
function checkNums(arr){
    for(let i = 0;i< length; i++){
        if(arr[i] == 4){
            arr.filter(item => item != 4);
            ++count;
            continue;
        }
        if(arr[i] == 8){
            arr.filter(item => item != 8);
            ++count;
            continue;
        }
        if(arr[i] == 12){
            arr.filter(item => item != 12);
            ++count;
            continue;
        }
        if(arr[i] == 16){
            arr.filter(item => item != 16);
            ++count;
            continue;
        }
    }
    console.log(count);
    
    if(count == 4){
        return true;
    }else{
        return false;
    }
    
}

console.log(checkNums(listOfNumbers));


// module.exports = checkNums;