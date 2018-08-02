const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0 , 0, canvas.width, canvas.height);
 for(var i = 0; i< 100; i++){
     var r = Math.ceil(Math.random()*255);
     var g = Math.ceil(Math.random()*255);
     var b = Math.ceil(Math.random()*255);
     var x = Math.ceil(Math.random()*800);
     var y = Math.ceil(Math.random()*600);
     ctx.fillStyle = 'rgb(' + r + ',' + g + ','+ b +  ')';
     ctx.fillRect(x, y, 5, 5);
 }
