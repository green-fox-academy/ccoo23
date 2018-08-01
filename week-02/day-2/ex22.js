//Palindrome builder
function pb(string){
    var letter1 = string.split('');
    //var letter2 = letter1.reverse();
    console.log(letter1);
    
    //console.log(letter1.reverse());
    var str1,str2;
    str1 = letter1.toString().replace(/,/g, "");
    
    var letter2 = letter1.reverse();
    console.log(letter2);
    //console.log(letter2);
    
    str2 = letter2.toString().replace(/,/g, "");
    console.log("1+2" + str1 + str2);
    var final = str1 + str2;
    
    //var letter = letter2.concat(letter1);
    //console.log(letter);
    //return letter1.toString().replace(/,/g, "");  //str = str.replace(/,/g, "");
    return final;
}

console.log(pb("greenfox"));
