
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var car,wall;
var speed,weight;

function preload()
{
	
}

function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	                                               
	speed=random(55,90);
	weight=random(400,1500);
	car=createSprite(50, 200, 50, 50);
	car.velocityX=speed;
	wall=createSprite(1500,200,60,height/2);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255);


  if(wall.x-car.x<(car.Wight+wall.Wight)/2)
 {
   car.velocityX=0;
   var deformation=0.5*weight*speed*speed/22500;
   if(deformation>180)
 {
   car.shapeColor=color(red);
 }
 if(deformation<180 &&deformation>100)
 {
   car.shapeColor=color(green);
 }
 if(deformation<100)
 {
   car.shapeColor=color(yellow);
 }
  drawSprites();
}
  
  drawSprites();
 
}



