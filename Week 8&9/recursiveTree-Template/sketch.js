// Code from a modified Daniel Shiffman example
// https://thecodingtrain.com/

var angle = 0;
var seed;

function setup() {
  createCanvas(400, 400);
  seed = random(1000);
}
////////////////////////////////////////////////
function draw() {
  background(225);
  angleMode(DEGREES);
  randomSeed(seed);

  var nX = noise(frameCount/200 + random(-50, 50))
  var mapped = map(nX, 0, 1, -50 , 50 );


  angleLeft = random(30, 60) + mapped;
  angleRight = random(30, 60) - mapped;

  stroke(255);
  translate(200, height);
  branch(100, 3, 255);
}
/////////////////////////////////////////////////
function branch(len, thickness, opac) {

  stroke(90, 21, 11, opac);
  strokeWeight(thickness);
  line(0, 0, 0, -len);
  translate(0, -len);
  
  
  if (len > 4) {
  
    opac = opac - 10;

    push();
    rotate(angleLeft);
    branch(len * random(0.5, 0.8), thickness*random(0.5, 0.8) , opac);
    pop();

    push();
    rotate(-angleRight);
    branch(len * random(0.5, 0.8), thickness*random(0.5, 0.8) , opac);
    pop();
  }

  else
  {
    translate(0, -len);
    fill(255, random(15, 45), random(100, 200), 200);
    noStroke();
    ellipse(0, 0, random(7,10) , random(7,10))
  }

}
