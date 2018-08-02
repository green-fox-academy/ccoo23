const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
var cx = canvas.width/2;
var cy = canvas.height/2;
console.log(cx);
var x = 0;
var y = 0;


function toCenter() {
    for(var i = 0;i< 40; i++){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        x = x + 20;
    }
    x = y = 0;
    for(var i = 0;i< 40; i++){
        ctx.beginPath();
        ctx.moveTo(x, y + 600);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        x = x + 20;
    }
    x = y = 0;
    for(var i = 0;i< 30; i++){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        y = y + 20;
    }
    x = y = 0;
    for(var i = 0;i< 30; i++){
        ctx.beginPath();
        ctx.moveTo(x+800, y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        y = y + 20;
    }
}

toCenter();