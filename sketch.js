  
var car, wall 
var speed,weight

function setup() {
  createCanvas(1600,400);
  wall= createSprite(1500,200, 60,height/2 )
  car=createSprite(50, 200, 50, 50);
  speed=random(55,200 )
  weight=random(400, 1500)
  car.velocityX= speed     
  car.x=World.mouseX;


console.log(car.x)
}

function draw() {
    if(wall.x-car.x < (car.width+wall.width)/2)
    {
        car.velocityX=0
        var deformation =(0.5* weight* speed *speed)/22509
        if(deformation>180)
        {
            car.shapeColor=color(255, 0, 0)
        }
        if(deformation<180&& deformation>100)
        {
            car.shapeColor= color(230, 230, 0)
        }
    
        if(deformation<100)
        {
            car.shapeColor = color(0, 255, 0);
        }
    }
  background(255,255,255);  
  drawSprites();
}