/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_24
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

  mover = new Mover();
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  background(255, 50);

  mover.render();
  mover.update();
  mover.checkEdges();
}
