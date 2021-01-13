const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, width, 10);

}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  
  ground.display();
}