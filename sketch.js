var astronout;


function preload() {
  bg=loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  m = loadAnimation("m1.png","m2.png");
}
function setup() {
  createCanvas(800,700);

  astronout = createSprite(400,400);
  astronout.addAnimation("sleeping",sleep);
  astronout.scale = 0.1 ;
}

function draw() 
{
  background(bg);
  drawSprites();

  textSize(20);
  fill("White");
  text("Instructions:",20,20);
  
  text("Right arroe = brushing",20,50);
  text("Up arrow = eating",20,80);
  text("Down arrow = gyming",20,110);

  if(keyDown("r")){
    astronout.addAnimation("brushing",brush);
   astronout.changeAnimation("brushing");
    
  }

  if(keyDown("d")){
    astrounout.addAnimation("eating",eat);
    astrounout.changeAnimation("eating");
  }


  
}

