var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,80,40);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.velocityX=5;
  fixedRect.velocityX=-5;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
if (fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 && movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2){
movingRect.shapeColor="red";
fixedRect.shapeColor="red";
movingRect.velocityX=movingRect.velocityX*(-1);
fixedRect.velocityX=fixedRect.velocityX*(-1);
}
 else {

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

 } 
  drawSprites();
}