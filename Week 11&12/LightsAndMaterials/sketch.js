function setup() {
    createCanvas(500, 500, WEBGL);
}

function draw() {
    background(125);

    /*normalMaterial();
    sphere(100,50,50);*/

    /*ambientMaterial(255);
    ambientLight(0,255,0)
    sphere(100,50,50);*/

    /*specularMaterial(255);
    pointLight(50,50,50, mouseX - width/2, mouseY - height/2, 100);
    pointLight(100,100,105,-200, -200, 100);
    sphere(100,50,50);*/

    ambientMaterial(255);
    directionalLight(255,0,0, 0, 1, 0);
    sphere(100,50,50);

    // sphere: no materials, no lights
    // sphere(100, 10, 10);

    // sphere: normal material, high res
    // normalMaterial();
    // sphere(100,100,100);

    // sphere: ambient material, light pointing towards the right
    // directionalLight(255,255,0, 1,0,0);
    // ambientMaterial(255);
    // sphere(100,100,100);

    // torus: ambient material, point light in the center and a bit towards you
    /*pointLight(255, 0, 0, 0, 0, 30);
    ambientMaterial(255);
    torus(100, 25, 50, 50);*/

}
