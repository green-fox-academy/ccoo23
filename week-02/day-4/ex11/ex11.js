const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
function getColor() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  const color = 'rgb(' + r + ',' + g + ','+ b +  ')';
  return color ;
}

for (let i = 0; i < 4; i++) {
  const color = getColor();
  const size = Math.random() * 400;
  ctx.fillStyle = color;
  ctx.fillRect(Math.random() * 600, Math.random() * 400, size, size);
}