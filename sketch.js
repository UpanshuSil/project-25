
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paper ;
var world;

function preload(){
	//paperImage.loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,630,width,20);
	dustbinObj=new dustbin(1000,610);
	paper = new Paper(10,620);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.display();
  groundObject.display();
  dustbinObj.display();

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-4}); 
  }

}

