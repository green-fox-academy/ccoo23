const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

const centerX = canvas.width/2;
const centerY = canvas.height/2;

function center(x , y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(centerX, centerY);
    ctx.stroke();
}
for(let i =0 ; i < 3 ; i++ ){
    center(Math.random()*600 , Math.random()*400);
}
