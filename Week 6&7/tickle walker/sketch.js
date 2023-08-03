////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
////////////////////////////////////
var tickler;

function setup() {
    createCanvas(900, 600);

    tickler = new Tickler();
}
//////////////////////////////////////////
function draw() {

    background(0);

    tickler.run();

}

class Tickler
{
    constructor(){
        this.ellipsePos = new createVector(width/2, height/2);
        this.newPos = new createVector(random(-5,5), random(-5,5));
      }
    
      run(){
        this.draw();
        this.move();
      }
    
      draw(){
        fill(255);
        ellipse(this.ellipsePos.x, this.ellipsePos.y, 50, 50);
      }
    
      move(){
        if(dist(mouseX, mouseY , this.ellipsePos.x , this.ellipsePos.y)<25)
        {
            this.ellipsePos.add(this.newPos);
            this.newPos.x = random(-5, 5);
            this.newPos.y = random(-5, 5);
        }
      }
}
