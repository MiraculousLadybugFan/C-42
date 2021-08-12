var iss, spaceCraft;
var issImg, spaceCraftImg, backGroundImg;
var hasDocked=false;
function preload(){
  issImg=loadImage("iss.png");
  spaceCraftImg=loadImage("spacecraft1.png");
  spaceCraftImg1=loadImage("spacecraft2.png");
  spaceCraftImg2=loadImage("spacecraft3.png");
  spaceCraftImg3=loadImage("spacecraft4.png");
  backGroundImg=loadImage("spacebg.jpg");
}
function setup() {
  createCanvas(600,350);
  iss=createSprite(330, 130, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.5;
  spaceCraft=createSprite(285,240);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale=0.15
}
function draw() {
  background(backGroundImg);
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1);
  }
  if(keyDown("UP_ARROW")){
spaceCraft.y-=2;
  }
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(spaceCraftImg3);
    spaceCraft.x-=1
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(spaceCraftImg2);
    spaceCraft.x+=1
  }
  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(spaceCraftImg1);
  }
  if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Successful",200,300);
  }
  drawSprites();
}