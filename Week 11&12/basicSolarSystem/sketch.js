var sun;
var earth;
var moon;

var starPlane;

var starLocs = [];

function preload()
{
    sun = loadImage('assets/sun.jpg');
    earth = loadImage('assets/earth.jpg');
    moon = loadImage('assets/moon.jpg');
}

function setup() {
    createCanvas(900, 600, WEBGL);
    

    starPlane = createGraphics(1000, 1000);
    starPlane.background(0);

    angleMode(DEGREES);

    for(var i=0; i<200; i++)
    {
        var x = random(starPlane.width);
        var y = random(starPlane.height);
        starLocs.push(createVector(x, y));
    }

}

function draw() {

    background(0);

    camera(0,-500,height, 0,0,0, 0,1,0);

    starPlane.background(0);
    starPlane.fill(255);
    starPlane.noStroke();

    for(var i=0; i<starLocs.length; i++)
    {
        starPlane.ellipse(starLocs[i].x, starLocs[i].y, 2,2);
    }

    push();
        translate(0,800,-1000);
        rotateX(40);
        texture(starPlane);
        plane(4000);
    pop();

    if (random(0,5) > 2.5 )
    {
        var newstarLoc = createVector(random(starPlane.width), random(starPlane.height));
        var s = Math.floor(random(starLocs.length)) - 1;
        starLocs[s] = newstarLoc;
    }


    //SUN
    push(); 
        noStroke();
        rotateY(frameCount/3)
        texture(sun);
        sphere(100, 50, 50);
    pop();

    pointLight(255, 255, 255, 0, 0, 30);
    pointLight(255, 255, 255, 0, 0, 30);

    //EARTH
    push();
        noStroke();
        rotate(frameCount/2);
        translate(350, 100, 0);
        rotateY(frameCount);
        ambientMaterial(255);
        texture(earth);
        sphere(60,50,50);

        //MOON
        push();
            noStroke();
            rotate(frameCount*2);
            translate(0, 100 , 0);
            rotateY(frameCount);
            ambientMaterial(255);
            texture(moon);
            sphere(20,50,50);
        pop();

    pop();
}
