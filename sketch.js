// Moving Background
var bg,bgimg
var redimg
var blueimg
var pinkimg
var greenimg
function preload()
{
  bgimg=loadImage("background0.png")
  redimg=loadImage("red_balloon0.png")
  blueimg=loadImage("blue_balloon0.png")
  pinkimg=loadImage("pink_balloon0.png")
  greenimg=loadImage("green_balloon0.png")

}

function setup()
{ 
  bg=createSprite(0,0,20,20)
  //Giving Animation to Bg
  bg.addImage("background",bgimg)
  bg.scale=2
  bg.velocityX=-4
}

function draw()
{
  background("black")
  //Making Bg Countious 
  if(bg.x<0)
  {
bg.x=bg.width/2
  }
  spawnRed()
  spawnBlue()
  spawnPink()
  spawnGreen()
  drawSprites()
}


//Red Balloon
function spawnRed()
{
  if(frameCount%60==0){
var red=createSprite(0,random(20,370))
red.addImage("red",redimg)
red.velocityX=3
red.scale=0.1
  }
}

//Blue Balloon
function spawnBlue(){
  if(frameCount%60==0){
    var blue=createSprite(0,random(20,370))
    blue.addImage("blue",blueimg)
    blue.velocityX=3
    blue.scale=0.1
  }
}

//Pink Balloon
function spawnPink(){
  if(frameCount%60==0){
    var pink=createSprite(0,random(20,370))
    pink.addImage("pink",pinkimg)
    pink.velocityX=3
    
  }
}

//Green Balloon
function spawnGreen(){
  if(frameCount%60==0){
    var green=createSprite(0,random(20,370))
    green.addImage("green",greenimg)
    green.velocityX=3
    green.scale=0.1
  }
}