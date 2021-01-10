
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var ball 
var db;

function preload(){
	db=loadImage("dustbingreen (1).png");
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1=createSprite(1450,740,500,40);
   box1.addImage(db)
	box1.shapeColor="red";


	ground= new Ground(900,height,1900,50);

	ball= new Ball(100,100,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  


  ground.display();
  ball.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-240});
	}
}







