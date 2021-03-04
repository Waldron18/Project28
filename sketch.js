
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree_img, boy_img;
var ground,stone;
var mango1, mango2, mango3, mango4, mango5;
var gameState = "onSling";

function preload()
{
	tree_img = loadImage("sprites/tree.png");
	boy_img = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground();
   stone = new Stone(200,580,10);
    
   mango1 = new Mango(600,450,10);
   mango2 = new Mango(550,400,10);
   mango3 = new Mango(450,450,10);
   mango4 = new Mango(500,460,10);
   mango5 = new Mango(650,420,10);

   slingshot = new Slingshot(stone.body,{x:190,y:585});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  image(tree_img,400,300,300,400);
  image(boy_img,150,530,200,200);

   ground.display();
   stone.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   slingshot.display();
 
   
   detectCollision(stone,mango1);
   detectCollision(stone,mango2);
   detectCollision(stone,mango3);
   detectCollision(stone,mango4);
   detectCollision(stone,mango5);
  
  drawSprites();
 
}

function mouseDragged(){
  if(gameState === "onSling"){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position 
  stoneBodyPosition = lstone.body.position 

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance <= lmango.radius+lstone.radius){
    Body.setStatic(lmango.body,false);
  }
}


function keyPressed(){
  if(keyCode===32){
    Body.setPosition(stone.body,{x:140,y:550});
    slingshot.attach(stone.body);
    gameState = "onSling";
  }
}



