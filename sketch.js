var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 30);
  fixedRect=createSprite(200, 200, 80, 150);
  movingRect.shapeColor="Green";
  fixedRect.shapeColor="Green";
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor="Red";
  fixedRect.shapeColor="Red";
  }else{
    movingRect.shapeColor="Green";
  fixedRect.shapeColor="Green";
}
  
  drawSprites();
}