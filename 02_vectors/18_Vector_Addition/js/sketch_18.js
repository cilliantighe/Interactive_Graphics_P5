/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_18
*/

// Variables to hold the 'x' and 'y' co-ordinates
var position;
var velocity;
var diameter = 20;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

    // Creating vectors to hold 'x' and 'y' co-ordinates and their velocity
    position = createVector(width / 2, height / 2);
    velocity = createVector(2, 2);

  // Repositioning the canvas
  canvas.parent('canvas');
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  // Setting the color of the canvas background
  background(255);

  // Incrementing the position of the ellipse using vector addition
  position.add(velocity);

  // Checking whether the ball has reached a side of the canvas and reverse it
  if ((position.x + (diameter / 2) >= width) || (position.x - +(diameter / 2) <= 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y + (diameter / 2) >= height) || (position.y - +(diameter / 2) <= 0)) {
    velocity.y = velocity.y * -1;
  }

  // Styling the ellipse
  noStroke();
  fill(254, 51, 102, 255);
  ellipse(position.x, position.y, diameter, diameter);
}
