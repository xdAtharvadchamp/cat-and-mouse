var cat,garden,mouse;
var catImg,gardenImg,mouseImg;
var catImg2,mouseImg2;
var catImg3,mouseImg3;

function preload() {
    //load the images here
    GardenImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png",)
    mouseImg3 = loadAnimation("images/mouse4.png")
  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(0,0,1000,800);
    garden.addImage("background",GardenImg) ;
    garden.scale = 2.5;

    cat = createSprite(900,660);
    cat.addAnimation("sitting",catImg);
    cat.scale = 0.3

    mouse = createSprite(150,660);
    mouse.addAnimation("sitting",mouseImg);
    mouse.scale = 0.3

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < cat.width/2 - mouse.width/2
     && mouse.x - cat.x < cat.width/2 - mouse.width/2

      ){
        cat.addAnimation("happycat",catImg3)
        cat.changeAnimation("happycat")
        mouse.addAnimation("happymouse",mouseImg3)
        mouse.changeAnimation("happymouse")


        }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW){

  
    cat.addAnimation("chasing",catImg2);
    cat.changeAnimation("chasing")
    cat.frameDelay = 25
    cat.x = cat.x - 20;

    
  }


if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("teasing",mouseImg2);
    mouse.changeAnimation("teasing");
    mouse.frameDelay = 25;
}
}