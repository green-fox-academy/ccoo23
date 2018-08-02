const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.
var x = canvas.width;
var y = canvas.height;
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(0, y/2);
ctx.lineTo(x, y/2);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(x/2, 0);
ctx.lineTo(x/2, y);
ctx.stroke();
