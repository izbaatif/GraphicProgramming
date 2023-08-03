////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
////////////////////////////////////
function setup() {
    createCanvas(900, 600);
    background(0);
    randomSeed(5);
}
//////////////////////////////////////////
function draw() {

    var randX = random(0, width);
    var randY = random(0, height);

    noStroke();
    fill(random(255), 0, 0, random(255));
    var size = random(10, 25)
    ellipse(randX, randY, size, size)
    
}
