const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//canvas.width = window.innerWidth;
//canvas.heigh = window.innerHeight;
ctx.globalCompositeOperarion = 'destination-over';

hue =Math.random() * 360;

let number = 0;
let scale = 10;

function drawFlowe(){
    let angle = number *197;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + 100;
    let positionY = radius * Math.cos(angle) + 70;

    ctx.fillStyle = 'hsl('+ hue +',100%,50%)';
    ctx.strokeStyle = "pink";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0,2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;

}



function animate(){
    //each frame
   
    drawFlowe();
    if(number >450 ) return;

    requestAnimationFrame(animate);

}

animate();


