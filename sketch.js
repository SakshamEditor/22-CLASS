const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
options = {

  isStatic:true
}
  object = Bodies.rectangle(200,390,400,20,options);
  World.add(world,object);
  ball_options = {
    restitution:1.5
  }

ball=Bodies.circle(100,105,20, ball_options)
World.add(world,ball)
console.log(object);
console.log(object.position.x);
console.log(object.position.y)
 

}
function draw(){
  Engine.update(engine);
background(0);
rectMode(CENTER);
  rect(object.position.x,object.position.y,450,20);

  circle(ball.position.x, ball.position.y,30)
}