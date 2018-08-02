const canvas = document.querySelector(".my-canvas");
const context = canvas.getContext('2d');

const drawSquare = (x, y, size) => {
    context.fillStyle = "purple";
    context.fillRect(x, y, size, size);
    
}

function drawTriangle(x, y, size) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y+size);
    context.lineTo(x+size , y);
    context.lineTo(x, y);
    context.stroke();
    context.fill();
}

// context.fillRect(20,20,100,100);
drawSquare(20, 20, 100);
drawTriangle(200, 200, 50);