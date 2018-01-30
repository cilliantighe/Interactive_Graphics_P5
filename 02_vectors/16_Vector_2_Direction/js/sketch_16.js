/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_16
*/

// Variables to hold the 'x' and 'y' co-ordinates
var x;
var y;
var xSpeed = 2;
var ySpeed = 4;
var diameter = 20;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  x = width / 2;
  y = height / 2;

  // Repositioning the canvas
  canvas.parent('canvas');
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  // Setting the color of the canvas background
  background(250);

  // Incrementing the position of the ellipse
  x = x + xSpeed;
  y = y + ySpeed;

  // Checking whether the ball has reached a side of the canvas and reverse it
  if ((x + (diameter / 2) >= width) || (x - +(diameter / 2) <= 0)) {
    xSpeed = xSpeed * -1;
  }
  if ((y + (diameter / 2) >= height) || (y - +(diameter / 2) <= 0)) {
    ySpeed = ySpeed * -1;
  }

  // Styling the ellipse
  noStroke();
  fill(255, 126, 0, 255);
  ellipse(x, y, diameter, diameter);
}
