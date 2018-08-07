const mapWith = (array, callback) => {
  let output = [];
  for(let i = 0; i< 3; i++) {
    output[i] = callback(parseInt(array[i]));    
  }
  
  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  
  return output;
}


  
  const addOne = (number) => {
    return number + 1;
  }
  
  // Exercise 1:
  
  console.log(mapWith([1, 2, 3], addOne));
  //expected result: [2, 3, 4]
  
  // Exercise 2:
  
  // Create a callback function which removes every second character from a string
function removeSecondLetter(str) {
  //console.log(str);
  arr = str.split('');
  //console.log(arr);
  for(let c = 0; c< arr.length; c++) {
    if(c % 2 === 1)
    arr[c] = "";
  }
  let str1 = arr.join('');  
  console.log(str1);
  
  return str1;
}

const words = ['map', 'reduce', 'filter'];
const mapWith1 = (array, callback) => {
  let output = [];
  for(let i = 0; i<3; i++) {

    output[i] = removeSecondLetter(array[i]);
  }  
  return output;
}
console.log(mapWith1(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']