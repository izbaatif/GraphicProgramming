var points;
var font;
var amt;
var redShade; 
var blueShade;
var sizeMap; 

function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

//////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 400);
  background(0);

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
}

//////////////////////////////////////////////////////////////////////
function draw() {

    var trail = map(mouseY, 0, height, 600, 800)
    fill(0,5);
    rect(0,0,width,trail);

    amt = map(mouseX , 0, width, 0, 80);
    sizeMap = map(mouseX , 0, width, 5, 10);


    // **** Your code here ****
    for(var i=0; i<points.length; i++)
    {
      var nX = noise(frameCount/200 + points[i].x);
      var mappedX = map(nX , 0 , 1, -amt , amt);

      var nY = noise(frameCount/200 + 10 + points[i].y);
      var mappedY = map(nY , 0 , 1, -amt , amt);

      var locX = mappedX + points[i].x;
      var locY = mappedY + points[i].y;

      redShade = map(nX , 0 , 1 , 0 , 255)
      blueShade = map(nY , 0 , 1 , 50 , 200)

      noStroke();
      fill(redShade , 0 , blueShade)
      ellipse( locX, locY , sizeMap , sizeMap);
    }
}
