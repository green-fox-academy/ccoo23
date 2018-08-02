const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

var x = 0;
var y = 0;
var line = 1;
function drawCb() {
    ctx.fillStyle = "black";
    // context.fillRect(x, y, size, size);
    for(line; line<=7; line++){
        if(line%2 == 1){
            for(var i = 0; i< 4; i++){
                ctx .fillRect(x, (line-1)*30 ,30, 30);
                x = x + 60;
            }
        }else{
            for(var i = 0; i< 3; i++){
                ctx .fillRect(x + 30, (line-1)*30 ,30, 30);
                x = x + 60;
            }
        }
        x = y = 0;
    }
    
}
drawCb();