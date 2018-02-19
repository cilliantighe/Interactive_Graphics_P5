/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_26
*/

// Variable for mover
var mover;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  mover = new Mover(30);

  // Repositioning the canvas
  canvas.parent('canvas');

}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  // Creating vector variables
  var wind = createVector(0.1, 0);
  var gravity = createVector(0, 0.01);

  background(255);

  // Applying multiple forces to the mover object
  mover.applyForce(wind);
  mover.applyForce(gravity);

  mover.checkEdges();
  mover.update();
  mover.render();

}
