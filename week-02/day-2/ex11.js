// - Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// - bonus for using the correct built in array method

numbers = [4, 5, 6, 7];
function print(array){
    for(let i = 0; i< array.length; i++){
        console.log(array[i]);
    }
    return null;
}
print(numbers);