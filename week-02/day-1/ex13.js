const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
var r = (23-currentHours)*3600 + (59-currentMinutes)*60 + 60-currentSeconds;
console.log("seconds remaining is "+ r);
