//////////////////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////////////////////
function setup() {
    createCanvas(1200, 500);
    background(0);
    rectMode(CENTER);
}
//////////////////////////////////////////////////
function draw() {
    background(0);

    //randomGrid();

    noiseDetail(10);
    //noiseGrid();


    noFill();
    beginShape();
    for(var x=0; x<width; x++)
    {
        fill(255)
        var y= noise(x/100) * height;
        vertex(x,y);
    }
    endShape(OPEN);

    noLoop();
}

function randomGrid()
{
    for(var i=0 ; i<width; i++)
    {
        for(var j=0 ; j<height; j++)
        {
            var c = random (0 , 255);
            stroke(c);
            point(i, j);
        }
    }
}

function noiseGrid()
{
    for(var i=0 ; i<width; i++)
    {
        for(var j=0 ; j<height; j++)
        {
            var n = noise( i/100  , j/100);
            var c = map( n , 0 , 1 , 0 , 255);
            stroke(c);
            point(i, j);
        }
    }
}
///////////////////////////////////////////////////
/*function randomGrid(){
    for (var x=0; x<width; x+=1){
        for (var y=0; y<height; y+=1){
            var c = random(0, 255);
            stroke(c)
            point(x, y);
        }
    }
    noLoop();
}
///////////////////////////////////////////////////
function noisyGrid(){
    for (var x=0; x<width; x+=1){
        for (var y=0; y<height; y+=1){
            var n = noise(x/100, y/100);
            var c = map(n, 0, 1, 0, 255);
            stroke(c)
            point(x, y);
        }
    }
}
*/