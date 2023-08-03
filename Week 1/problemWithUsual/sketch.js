//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
function setup() {
  createCanvas(720, 400);
}
////////////////////////////////////////////////////
function draw() {
  background(0, 150, 200);

  drawCat(mouseX,mouseY);
  // drawCatSimpler(300, 200);

  // remove and LIVE CODE
  // for (var x=1; x<4; x++){
  //   drawCat(x*150, 200);
  // }

}
/////////////////////////////////////////////////////
function drawCat(x, y){
  translate(x,y);
  rectMode(CENTER);
  strokeWeight(2);
  rect(0, 0, 100, 100); // face
  rect(-20, -20, 25, 10); // left eye
  rect(20, -20, 25, 10); // right eye
  rect(0, 5, 7, 25); // nose
  rect(0, 30, 30, 5); // mouth
  triangle(-50, -50, -30, -70, -10, -50);
  triangle(50, -50, 30, -70, 10, -50);
}

// function drawCatSimpler(x, y){
//   translate(x, y);
//   rectMode(CENTER);
//   strokeWeight(2);
//   rect(0, 0, 100, 100); // face
//   rect(-20, -20, 25, 10); // left eye
//   rect(20, -20, 25, 10); // right eye
//   rect(0, 5, 7, 25); // nose
//   rect(0, 30, 30, 5); // mouth
//   triangle(-50, -50, -30, -70, -10, -50);
//   triangle(50, -50, 30, -70, 10, -50);
// }
