var ship, shipImg;
var seaImg, sea;


function preload(){
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
  
}

function setup(){
  createCanvas(4168,1667);

  sea = createSprite(200, 400, 400, 150);
  sea.addImage("sea", seaImg);

  ship = createSprite(400, 300, 50, 50);
  ship.addAnimation("ship", shipImg);

  
}

function draw() {
  background("blue");
    
if (sea.x < 0) {
   sea.x = sea.width / 2;
  }
  
  drawSprites();
}
