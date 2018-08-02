const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a box that has different colored lines on each edge.
var Array = [[10, 10], [290,  10], [290, 290], [10, 290], [10, 10]];
var color = ['red', 'green', 'blue', 'yellow'];
function drawBox(arr, arr2) {
    for (let i = 0; i < 4; i++) {
        //console.log(arr2[i]);
        //  var color = "'" + arr2[i] +  "'" ;
        ctx.strokeStyle = arr2[i];
        ctx.beginPath();
        ctx.moveTo(arr[i][0], arr[i][1]);
        ctx.lineTo(arr[i+1][0], arr[i+1][1]);
        ctx.stroke();
    }
}

drawBox(Array , color);