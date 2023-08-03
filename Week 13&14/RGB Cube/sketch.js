function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES)
}

function draw() {
  background(125)
  
  camera(0,0, -600 , 0,0,0, 0,1,0)
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  
  for(var i=0; i<10; i++)
  {
    for(var j=0; j<10; j++)
    { 
      for(var k=0; k<10; k++)
      {
        push()
          translate(-150 + i*30 , -150 + j*30 , k*30)
          
          var mapR = map(i, 0, 9, 0, 255);
          var mapG = map(j, 0, 9, 0, 255);
          var mapB = map(k, 0, 9, 0, 255);
          
          /*var mapH = map(i, 0, 9, 0, 360);
          var mapS = map(i, 0, 9, 0, 100);
          var mapB = map(i, 0, 9, 0, 100);
          
          colorMode(HSB);
          fill(mapH , mapS , mapB);*/
          
          colorMode(RGB)
          fill(mapR, mapG, mapB)
          
          noStroke();
          box(30);
          
        pop();
      }
    }
  }
}
