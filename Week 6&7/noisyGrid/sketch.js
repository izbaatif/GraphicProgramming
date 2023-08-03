var cols, rows;
var w = 50;
var grid = [];

function setup() {
  createCanvas(400, 400);

// load the col / row vars with values that dynamically read from the canvas.
  cols = floor(width/w);
  rows = floor(height/w);

// load the the array with generic row and column values
    for (var j = 0; j < rows; j++){
      for (var i = 0; i < cols; i++){

        // And for each, create an object instance based on the Shape class.
        var shape = new Shape(i,j);
        grid.push(shape);
      }
    }
}
function draw() {
  background(51);
  //frameRate(2);

// draw grid (outer squares)
  for (var i = 0; i < grid.length; i++) {
    grid[i].outerGrid();

  }

// draw inner squares
  for (var i = 0; i < grid.length; i++) {
    grid[i].innerSquare();
  }
}

function Shape(i, j) {
  this.i = i;
  this.j = j;
  var x = this.i*w;
  var y = this.j*w;

  this.outerGrid = function () {
    push();
      stroke(200, 0, 255);
      noFill();
      rect(x, y, w, w);
      translate(x, y);
    pop();
   }

    this.innerSquare = function () {
        noFill();
        stroke(150, 0, 255);
        let ts = millis()/1000.0;
        let angle = radians(ts*2.0*Math.PI*5.0);
        let rect_w = (w-20);
        let tx = x+10 + rect_w / 2;
        let ty = y+10 + rect_w / 2;
        push();
            translate(tx, ty);
            rotate(angle);
            rect(-rect_w/2, -rect_w/2, rect_w, rect_w);
        pop();
    }
}