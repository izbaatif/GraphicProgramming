//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
function setup() {
  createCanvas(720, 400);
}
///////////////////////////////////
function draw() {
  background(220);
  fill(0);

  translate(60, 60);
  rect(10, 10, 100, 100);

  translate(20,20);
  fill(255);
  ellipse(0,0, 10, 10);
}
