
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


	base = new Ground(400,550,800,10);
	 
	garbage = new Paper(180,500,20); 
   
	dustbin1 = new Dustbin(540,495,20,100);
	dustbin2 = new Dustbin(650,535,200,20);
	dustbin3 = new Dustbin(750,495,20,100);

	Engine.run(engine);
	
}

function draw() {
	rectMode(CENTER);
	background(0);
	base.display();

	garbage.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();


  
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(garbage.body,garbage.body.position,{x:55,y:-55});
	}
	 



   }



