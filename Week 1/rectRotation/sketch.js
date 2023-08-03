//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
function setup() {
  createCanvas(720, 400);
  rectMode(CENTER);
}
///////////////////////////////////////////////
function draw() {
  background(220);
  fill(0);

  translate(200,200)
  rect(0,0,200,200);
  
  fill(255);
  
  push();
  translate(100, 100);
  ellipse(0,0, 30,30);
  pop();

  translate(-100, -100);
  ellipse(0,0, 30,30);
  
  
}
////////////////////////////////////////////////
// // CASE A
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   rotate(radians(45));
//   translate(200, 100);
//   rect (0, 0, 100, 100);
// }
/////////////////////////////////////////////////
// // CASE B
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   translate(200, 100);
//   rotate(radians(45));
//   rect (0, 0, 100, 100);
// }
////////////////////////////////////////////////
// CASE C
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   rectMode(CENTER); // better move to setup() when live coding
//   translate(200, 100);
//   rotate(radians(45));
//   rect (0, 0, 100, 100);
// }
///////////////////////////////////////////////
// // CASE D - scaling
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   rectMode(CENTER); // better move to setup() when live coding
//   translate(200, 100);
//   scale(0.5, 0.5);
//   rect (0, 0, 100, 100);
// }
