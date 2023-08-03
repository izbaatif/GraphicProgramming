//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

var balls=[];

for(var i=0; i<100; i++)
{
  balls.push(i+"ball")
}
///////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
  background(0);

  for(var i=0; i<balls.length; i++)
  {
    balls[i]= new Ball();
  }
}
////////////////////////////////////////////////
function draw() {
  for(var i=0; i<balls.length; i++)
  {
    balls[i].run();
  }
}
///////////////////////////////////////////////
class Ball {

  constructor(){
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    var randomX = width/2+random(-100,100);
    var randomY = height/2+random(-100,100);
    this.location = new createVector(randomX, randomY);
    this.prevLocation = new createVector(randomX, randomY);
  }

  run(){
    this.draw();
    this.move();
  }

  draw(){
    stroke(255);
    line(this.location.x,this.location.y,this.prevLocation.x,this.prevLocation.y);
    this.prevLocation = this.location.copy();
  }

  move(){
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.location.add(this.velocity);
  }

}
