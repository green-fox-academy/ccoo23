const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const height = Math.sqrt(3)*300;
ctx.beginPath();
ctx.moveTo(0 , 600);
ctx.lineTo(600, 600);
ctx.lineTo(300, (600 - height));
ctx.lineTo(0, 600);
ctx.stroke();

var topX = 300;
var topY = 600 - height;
for(let i = 1; i<= 20; i++){
    ctx.moveTo(topX - 15*i, topY + i * (height/20));
    ctx.lineTo(topX + 15*i, topY + i * (height/20));
    ctx.stroke();
}
var topX = 300;
var topY = 600 - height;
for(let i = 1; i<= 20; i++){
    ctx.moveTo(topX - 15*i, topY + i * (height/20));
    ctx.lineTo(600 - 30*i, 600);
    ctx.stroke();
}
var topX = 300;
var topY = 600 - height;
for(let i = 1; i<= 20; i++){
    ctx.moveTo(topX + 15*i, topY + i * (height/20));
    ctx.lineTo(30*i, 600);
    ctx.stroke();
}

