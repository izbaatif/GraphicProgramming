function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES)
    background(0);
}

function draw() {

    translate(-width/2, -height/2);
    rectMode(CENTER);
    background(0);

    var speed= frameCount;

    push();
    translate( 100 , 200)
    normalMaterial();
    rotateX(speed);
    rotateY(speed);
    rotateZ(speed);
    rect(0,0,100,100);
    pop();

    push();
    translate( 400 , 200)
    normalMaterial();
    rotateX(speed);
    rotateY(speed);
    rotateZ(speed);
    box(100, 100, 100);
    pop();

    push();
    translate( 700 , 200)
    normalMaterial();
    rotateX(speed);
    rotateY(speed);
    rotateZ(speed);
    cylinder(100, 100, 100);
    pop();

    push();
    translate(100 , 450)
    normalMaterial();
    rotateX(speed);
    rotateY(speed);
    rotateZ(speed);
    cone(70, 100, 100);
    pop();

    push();
    translate(400 , 450)
    normalMaterial();
    rotateX(speed);
    rotateY(speed);
    rotateZ(speed);
    torus(50, 30);
    pop();

    push();
    translate(700 , 450)
    normalMaterial();
    rotateX(speed);
    rotateY(speed);
    rotateZ(speed);
    sphere(100, 50, 50);
    pop();
}
