/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_04
*/

// Variable to act as an object of the 'Walker' class
var walker;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');

  // Setting the color of the canvas background
  background(230);

  // Creating an object of the 'walker' class
  walker = new Walker();
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
  // Calling the render and step function in a loop
  walker.render();
  walker.step();
}

function Walker() {
  // Positioning the 'walker' in the centre of the canvas
  this.x = width / 2;
  this.y = height / 2;

  // Creating a function called 'render' that draws a point at the given co-ordinates
  this.render = function() {
    stroke(50);
    point(this.x, this.y);
  }

  // Creating a function called 'step' to move the current position of the 'point'
  this.step = function() {

    // The random function will return a float between 0-1
    var r = random(1);

    // Here we are controlling the probability of the direction of the point
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }

    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
}
