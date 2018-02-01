/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_21
*/

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

  // Setting the color of the canvas background
  background(255);

  // Delcaring variables to hold the mouse position, center of the canvas and the difference between them
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);

  // This will draw a rectangle on the top of the canvas with the same magnitude as the line between the mouse and centerpoint
  var m = vectorLine.mag();
  fill(0);
  stroke(0);
  rect(0, 0, m, 10);

  // In order to draw the line at the appropriate location, we need to translate the line to be drawn
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(0);
  line(0, 0, vectorLine.x, vectorLine.y);
}
