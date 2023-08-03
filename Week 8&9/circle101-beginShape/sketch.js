/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
function setup() {
    createCanvas(500,500);
    background(0);
    angleMode(DEGREES)
}
//////////////////////////////////////////////
function draw() {
    stroke(255);
    noFill();

    translate(width/2 , height/2);

    var radius = frameCount/5;
    var theta = frameCount;

    fill(255)
    var x = cos(theta) * radius;
    var y = sin(theta) * radius;
    ellipse(x, y, 15, 15)

    /*
    fill(255)
    for(var theta=0; theta<360; theta+=20)
    {
      var x = cos(theta) * radius;
      var y = sin(theta) * radius;
      ellipse(x, y, 15, 15)
    }*/

    /*translate(width/2,height/2);

    var radius = 200;

    beginShape();
    for (var theta=0; theta<360; theta+=5){
      var x = cos(radians(theta)) * radius;
      var y = sin(radians(theta)) * radius;
      vertex(x,y);
    }
    endShape(CLOSE);*/
}
