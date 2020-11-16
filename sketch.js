
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Wall1=createSprite(600,650,150,10);
	
	Wall2=createSprite(530,610,10,75);
	
	Wall3=createSprite(670,610,10,75);
	
    garbage=createSprite(100,650,20,20);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   garbage.velocityX=12;
	   garbage.velocityY=-20;
	   garbage.velocityY=garbage.velocityY+8;
}   
}


