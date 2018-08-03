const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
const centerX = canvas.width/2;
const centerY = canvas.height/2;
for (let i = 1 ; i < 3 ; i++){
    let size = Math.random()*400;  
    ctx.fillRect(centerX - size/2, centerY - size/2, size, size);
}