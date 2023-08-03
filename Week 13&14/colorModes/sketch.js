/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
function setup() {
    createCanvas(500, 500);

    // RGB red 255, green 255, blue 255
    /*colorMode(RGB);

    for (var i = 0; i < 255; i++) {
        for (var j = 0; j < 255; j++) {
            stroke(i, j, 0);
            point(i, j);
        }
    }

    translate(0, 300);

    //HSB hue 360, saturation 100, brightness 100, alpha 1
    colorMode(HSB);

    for (var i = 0; i < 360; i++) {
        for (var j = 0; j < 100; j++) {
            stroke(i, j, 100);
            point(i, j);
        }
    }*/

    colorMode(RGB);
    
    for(var i=0; i<255; i++)
    {
      for(var j=0; j<255; j++)
      {
        stroke(i,0,j);
        point(i,j)
      }
    }
    
    colorMode(HSB);
    
    translate(0, 300)
    for(var i=0; i<360; i++)
    {
      for(var j=0; j<100; j++)
      {
        stroke(i,j,100)
        //stroke(i,100,j);
        point(i,j);
      }
    }
    
    
    noLoop();
}
/////////////////////////////////////////////
function draw() {
    //do nothing
    console.log(mouseX)
}
