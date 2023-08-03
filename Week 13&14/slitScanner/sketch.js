var video;
var startx;

function setup() {
    createCanvas(640 * 2, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.hide();
    
    startx = 640;
}

function draw() {
    image(video, 0, 0);

    // STEP 1 - write your cocde below
    var pixels = get(video.width/2-2 , 0, 1, video.height);
  
    push();
    stroke(255, 0, 0);
    line(video.width / 2, 0, video.width / 2, video.height);
    pop();

    // STEP 2 - write your code below
    startx +=1;
    
    if(startx == 640*2)
    {
      startx = 640
    }
    
    push()
      stroke(255,0,0)
      line(startx ,0 ,startx, height)
      noStroke()
      image(pixels, startx-2, 0)
    pop()



}
