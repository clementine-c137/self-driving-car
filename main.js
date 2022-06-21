const canvas = document.getElementById("canvasjs");
canvas.width=300;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(1), 150, 30, 50);
//car.draw(ctx);
animate();

function animate(){
    car.updateMove();
    canvas.height=window.innerHeight; //inside animate func so the canvas refresh & clear
    ctx.save();
    ctx.translate(0, -car.y+canvas.height*0.7);
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}