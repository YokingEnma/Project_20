var catImg;
var mouseImg;
var cat2Img;
var mouse2Img;
var cat;
var mouse;

function preload() {
    //load the images here
    catImg=loadImage("cat4.png");
    mouseImg=loadImage("mouse1.png");
    cat2Img=loadImage("cat2.png","cat3.png");
    mouse2Img=loadImage("mouse2.png","mouse3.png");
    bgImg=loadImage("garden.png");
    cat3Img=loadImage("cat1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(700,10,20,20);
    cat.addImage(cat3Img);
   
    mouse=createSprite(10,10,20,20);
    mouse.addImage(mouseImg);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addImage(catImg);
    mouse.addImage(mouseImg);
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",Mouse2Img);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catRunning",cat2Img);
    cat.changeAnimation("catRunning");
    mouse.frameDelay=25;
    cat.velocityX=-10;
  }
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",Mouse2Img);
      mouse.changeAnimation("mouseTeasing");
      cat.addAnimation("catRunning",cat2Img);
      cat.changeAnimation("catRunning");
      mouse.frameDelay=25;
      cat.velocityX=-10;
  }

}
