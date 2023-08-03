var font;
function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

var points;

function setup() {
  createCanvas(900, 400);
  fill(255, 104, 204, 150);
  noStroke();

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });

}

function draw() {
    background(0);

    // *** your code here ****
    mapX = map(mouseX, 5, width, 0, 50, true)
    
    for(var i=0; i<points.length; i++)
    {
      ellipse(points[i].x + random(-mapX, mapX), points[i].y + random(-mapX, mapX), 10, 10)
    }

    noLoop();
}

function mouseMoved(){
    loop();
}
