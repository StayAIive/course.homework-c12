var garden,rabbit,leave,apple,grass;
var gardenImg,rabbitImg,leaveImg,appleImg,grassImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  

  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  for(var i = 0; i < 10; i++){
      grass = createSprite(20 + (40 * i),370,1,1);
      grass.scale = 0.10;
      grass.addImage(grassImg);
  }
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);


  if(frameCount % 80 == 0){
    leaf = createSprite(random(10,391),0,1,1);
    leaf.scale = 0.1;
    leaf.addImage(leafImg);
    leaf.velocityY +=3;
    leaf.lifetime = Math.round(random(100,133));
  }

  if(frameCount % 80 == 0){
    apple = createSprite(random(10,391),0,1,1);
    apple.scale = 0.1;
    apple.addImage(appleImg);
    apple.velocityY +=10;
    apple.lifetime = Math.round(random(100,133));
  }

  drawSprites();
}