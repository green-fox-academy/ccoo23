const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
var size = 20;
var x = 0;
var y = 0;
for(let i = 0; i< 6; i++){
    ctx.fillStyle = 'violet';
    ctx.fillRect(x, y, size, size);
    x += size;
    y += size;
    size = size * 1.3;
}