
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hanger;
var rope1;
var bob1,bob2,bob3,bob4,bob5,bob6;
function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hanger = new Roof(400,100,600,20);
	bob1 = new bob(200,200,100);
	bob2 = new bob(200,200,100);
	bob3 = new bob(200,200,100);
	bob4 = new bob(200,200,100);
	bob5 = new bob(200,200,100);
	bob6 = new bob(200,200,100);
	rope1 = new chain(bob1.x,bob1.y,hanger.x,hanger.y);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  hanger.display()
  bob1.display()
  rope1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()
  drawSprites();
 
}



