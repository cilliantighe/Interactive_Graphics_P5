/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_32
*/

var angle = 0;
var aAcceleration = 0.02;
var aVelocity = 0;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
  background(255);

  stroke(0);
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  stroke(254, 51, 102);
  strokeWeight(5);
  line(-60, 0, 60, 0);
  noStroke();
  fill(254, 51, 102);
  ellipse(60, 0, 25, 25);
  ellipse(-60, 0, 25, 25);
  pop();

  aVelocity = aVelocity + aAcceleration;
  aVelocity = constrain(aVelocity, 0, 0.1);
  angle = angle + aVelocity;
}
