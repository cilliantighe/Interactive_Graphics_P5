/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_30
*/

var mover;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');

  // Parameters (x, y, vx, vy, ax, ay, mass)
  mover = new Mover(30, 30, 3, 2, 2, 0, 2);
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
  background(255);

  mover.checkEdges();
  mover.update();
  mover.render();
}
