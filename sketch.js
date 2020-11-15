var bullet,wall1,wall2,wall3,speed,weight,thickness

function setup() {
  createCanvas(1600,600);
  createSprite(400, 200, 50, 50);
  speed=random(220,320)
  weight=random(30,52)
  thickness=random(220,82)
  bullet=createSprite(20,200,70,70)
  bullet.shapeColor="white"
  bullet.velocityX=speed 
  wall1=createSprite(1400,100,50,100)
  wall1.shapeColor="grey"
  wall2=createSprite(1400,300,50,100)
  wall2.shapeColor="grey"
  wall3=createSprite(1400,500,50,100)
  wall3.shapeColor="grey"
  

  
}

function draw() {
  background(255,255,255);
  if(wall1.x-bullet.x<bullet.width/2+wall1.width/2){
    bullet.velocityX=0
    var deformation=0.5 *weight* speed* speed/22500
    if(deformation>180){
      bullet.shapeColor="red"
    }
    if(deformation>180 && deformation<100){
      bullet.shapeColor="yellow"
    }
    if(deformation<100){
      bullet.shapeColor="green"
    }
  }  
  drawSprites();
}
function collided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}