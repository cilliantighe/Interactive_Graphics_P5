/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_35
*/

var radius = 0;
var angle = 0;

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

  var x = radius * cos(angle);
  var y = radius * sin(angle);

  noStroke();
  fill(254, 51, 102);
  ellipse(x + width / 2, y + height / 2, 25, 25);

  angle += 0.01;
  radius += 0.1;

}
