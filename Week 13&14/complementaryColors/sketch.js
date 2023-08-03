/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
function setup() {
    createCanvas(720, 400);
    rectMode(CENTER);
    colorMode(HSB);
    noStroke();
}
/////////////////////////////////////////////////
function draw() {
    background(0);

    //Complementary. In second fill add 180 to the first fills hue part
    /*fill(90, 100, 100);
    rect(width/2, height/2, 200, 200);
    fill(270, 100, 100);
    rect(width/2, height/2, 100, 100);*/
    
    //Triadric
    var startColor = 0;
    var colorDiff = 360/5;
    
    fill(startColor, 100, 100);
    rect(width/2, height/2, 300, 300);
    fill(startColor + colorDiff, 100, 100);
    rect(width/2, height/2, 200, 200);
    fill(startColor + colorDiff*2 , 100, 100)
    rect(width/2, height/2 , 100, 100);
    
    //complimentary colors
    /*fill(0, 100, 100);
    rect(width / 2, height / 2, 200, 200);
    fill(180, 100, 100);
    rect(width / 2, height / 2, 100, 100);*/

    //triadic colors
    // var startAngle = 0;
    // var diffAngle = 360/3;
    // fill(startAngle + 0,100,100);
    // rect(width/2, height/2, 300,300);
    // fill((startAngle + diffAngle)%360,100,100);
    // rect(width/2, height/2, 200,200);
    // fill((startAngle + diffAngle*2)%360,100,100);
    // rect(width/2, height/2, 100,100);
}
