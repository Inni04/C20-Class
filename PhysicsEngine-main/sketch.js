
const Engine = Matter.Engine;
//namespacing=giving nick names
//const=constant fixed variable
//all kind of physics property
const World = Matter.World;
//the world where we create to use physics property
const Bodies = Matter.Bodies;
//the group of objects which follows rules accordingly
const Body = Matter.Body;
//individual body




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  //We are creating OUR engine from matter.Engine
  world = engine.world;
  //whenever we create a engine a world gets created already with it

  
   var ball_options = { //all the physics properties
    restitution: 0.95,
    //resitution denotes bounciness
    frictionAir:0.01
    //frictionAir denotes air resistance
  }
   
   var ground_options ={
     //we create physics property here
     //it follows JSON Rule
     //Javascript Object Notation
     //whenever you use JSON... instead of = (equals) we use : (colon) and instead of ; we use ,
     isStatic: true, //true = won't move, false = will move
     //isStatic= if the object is moving or not

   };
  
  
//we are creating our object i.e ground from Bodies
  ground = Bodies.rectangle(100,400,400,20,ground_options); //(x,y,w,h)
  World.add(world,ground);
  //we are adding our world's ground to Matter.js World

  ball = Bodies.circle(100,10,20,ball_options); //(x,y,radius)
  World.add(world,ball);

  Box1 = Bodies.rectangle(200,200,20,20,ball_options);
  World.add(world,Box1);
  
  Box2 = Bodies.rectangle(100,100,10,10,ball_options);
  World.add(world,Box2);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //to make the objects in Center
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //we are updating our engine from matter.Engine, updating the properties (e.g. position)
  //x property of a ball - ball.position.x , ground.position.y etc...
  
 
   //we are displaying our object
  ellipse(ball.position.x,ball.position.y,20); //radius = 20
  rect(ground.position.x,ground.position.y,400,20);//500 = width, 20 = height
  rect(Box1.position.x,Box1.position.y,20,20);
  rect(Box2.position.x,Box2.position.y,100,10);

console.log(ground.position.y);

  //resitution - 0 = less bouncy, >0 = more bouncy (give resitution usually from 0-1)
  
}

