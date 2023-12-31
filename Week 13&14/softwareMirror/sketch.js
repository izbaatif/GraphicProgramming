var video;

function setup() {
    createCanvas(640 * 2, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.hide();
    noStroke();
    angleMode(DEGREES);
}

function draw() {
    background(0);
    image(video, 0, 0);

    video.loadPixels();
  
    translate(640, 0);
    var arcSize = 20;
    translate(arcSize / 2, arcSize / 2);

    for (var x=0; x<video.width; x+= arcSize) {
        for (var y=0; y<video.height; y+= arcSize) {

            var index = ((video.width * y) + x) * 4 + 5;
              
            var pixelBrightness =video.pixels [index+3];
            
            
            push();
              fill(255)
              translate(x, y);
              var theta = map(pixelBrightness, 0, 255, 0, 360);
              rotate((180 - theta) / 2);
              arc(0, 0, arcSize, arcSize, 0, theta);
            pop();
            
        }
    }
}
