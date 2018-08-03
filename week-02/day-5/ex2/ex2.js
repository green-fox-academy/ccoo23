const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 0, 600, 600);
ctx.strokeStyle = 'green';
for(let i = 0; i<= 11; i++){
    ctx.beginPath();
    ctx.moveTo((i - 1) * 30 , 300);
    ctx.lineTo(300 , 300 - i*30);
    ctx.moveTo((i - 1) * 30 , 300);
    ctx.lineTo(300 , 300 + i*30);
    ctx.stroke();
}
for(let i = 0; i<= 10; i++){
    ctx.beginPath();
    ctx.moveTo((600 - (i - 1) * 30) , 300);
    ctx.lineTo(300 , 300 - i*30);
    ctx.moveTo((600 - (i - 1) * 30) , 300);
    ctx.lineTo(300 , 300 + i*30);
    ctx.stroke();
}