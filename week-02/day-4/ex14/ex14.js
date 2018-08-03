const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

const color = ['red' , 'orange' , 'yellow' , 'green' , 'blue' , 'indigo' , 'violet'];
var x = 0;
var y = 0;
var width = 600;
var height = 400
for(let i = 0; i< 7; i++){
    ctx.fillStyle = color[i];
    ctx.fillRect(x, y, width, height);
    x += 40;
    y += 20;
    width -=80;
    height -=40;
}
