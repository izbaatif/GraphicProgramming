// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var engine;
var ground;

var ball1;
var ball2;

var catapult;
var catapultSpacer;
var constraint;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create(); // create an engine
  setupCatapult();
  setupBalls();
  setupGround();
}
/////////////////////////////////////////////////////////////
function draw() {
  background(0);
  Engine.update(engine);
  drawBalls();
  drawCatapult();
  drawGround();
}
/////////////////////////////////////////////////////////////
function setupCatapult(){
  // your code here
  catapult = Bodies.rectangle(350, height - 100, 600,10)

  constraint = Constraint.create({
    pointA : {x: 350, y: height-100},
    bodyB : catapult,
    pointB: {x:0, y:0},
    stiffness: 1,
  })

  catapultSpacer = Bodies.rectangle(100, height -20, 20, 150, {isStatic:true});

  World.add(engine.world, [catapult,constraint, catapultSpacer]);
}
/////////////////////////////////////////////////////////////
function drawCatapult(){
  // your code here
  noStroke();
  fill(255);
  rectMode(CENTER);
  drawVertices(catapult.vertices);

  fill(255,0,0);
  drawVertices(catapultSpacer.vertices);
}
/////////////////////////////////////////////////////////////
function setupBalls(){
  // your code here
  ball1 = Bodies.circle(500, 0 , 50, {density:0.01});

  ball2 = Bodies.circle(100, 0 , 20);

  World.add(engine.world, [ball1, ball2]);

}
/////////////////////////////////////////////////////////////
function drawBalls(){
  // your code here
  fill(0,0,255);
  drawVertices(ball1.vertices)
  drawVertices(ball2.vertices)
}
/////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(400, height-10, 810, 25, {isStatic: true});
  World.add(engine.world, [ground]);
}
/////////////////////////////////////////////////////////////
function drawGround(){
  noStroke();
  fill(128);
  drawVertices(ground.vertices);
}
////////////////////////////////////////////////////////////////
// ******* HELPER FUNCTIONS *********
// DO NOT WRITE BELOW HERE
/////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
