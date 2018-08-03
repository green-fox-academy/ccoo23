const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 0, 600, 600);
var topX = 600;
var rightY = 600;
for(let i = 1; i<= 20; i++){
  ctx.strokeStyle = 'violet';
  ctx.beginPath();
  ctx.moveTo(600 - i * 30, 0);
  ctx.lineTo(600, 600 - (i-1)*30);
  ctx.stroke();
}
for(let i = 1; i<= 20; i++){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, 600 - i * 30);
    ctx.lineTo(600 - (i-1)*30, 600);
    ctx.stroke();
  }
// ctx.strokeStyle = 'black';
// ctx.strokeRect(0, 0, 600, 600);
// ctx.strokeStyle = 'violet';
// ctx.beginPath();
// ctx.arc(0, 600, 600, Math.PI*1.5, 0);
// ctx.stroke();


// ctx.strokeStyle = 'green';
// ctx.beginPath();
// ctx.arc(600, 0, 600, Math.PI*0.5, Math.PI);
// ctx.stroke(); 

// var x = 0;
// var y = 0; 
// var rads = 0;

// for(let i = 1; i< 16; i++){
//   ctx.beginPath();
//   ctx.moveTo(600, 600 - 40 * i);
//   ctx.lineTo(600 * Math.cos(Math.PI/15 * i) , 600 - (600 * Math.sin(Math.PI/15 * i) ) );
//   ctx.stroke();
// }
