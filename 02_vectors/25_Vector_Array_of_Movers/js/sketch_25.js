/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_25
*/

var amount = 2000;
var mover = [];

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');

  // Loop for creating an array of 'Mover' objects
  for (var i = 0; i < amount; i++) {
    mover[i] = new Mover();
  }
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  background(255, 50);

  // Loop for rendering and updating every mover object in the array
  for (var i = 0; i < mover.length; i++) {
    mover[i].render();
    mover[i].update();
    mover[i].checkEdges();
  }
}

// Function checking when the button is pressed
function mousePressed() {
  for (var i = 0; i < mover.length; i++) {
    mover[i].upSize();
  }
}

// Function checking when the button is released
function mouseReleased() {
  for (var i = 0; i < mover.length; i++) {
    mover[i].downSize();
  }
}
