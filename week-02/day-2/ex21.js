//anagram
function anagram(word1, word2){
    var letter1 = word1.split('');
    var letter2 = word2.split('');
    // console.log(letter1);
    // console.log(letter2);
    // console.log(letter2.reverse());
    // console.log(letter1 == letter2.reverse());
    if(letter1.toString() == letter2.reverse().toString()){
        return true;
    }else{
        return false;
    }
}
console.log(anagram("green", "fox"));
console.log(anagram("abc", "cba"));