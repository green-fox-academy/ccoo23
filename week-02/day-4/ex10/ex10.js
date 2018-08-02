const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.
const centerX = canvas.width/2;
const centerY = canvas.height/2;
ctx.fillStyle = 'green';
ctx.fillRect(centerX - 5 , centerY - 5 , 10 , 10 );