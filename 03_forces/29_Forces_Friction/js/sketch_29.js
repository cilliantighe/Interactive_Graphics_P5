/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_29
*/

// Array of movers and the number of them
var count = 200;
var movers = [];

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');

  // For loop for creating an array of 'Mover' objects
  for (var i = 0; i < count; i++) {
    movers[i] = new Mover(floor(random(5, 20)));
  }
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
  background(255);

  // For loop to call each function on each mover object
  for (var i = 0; i < count; i++) {

    // Vectors for wind and gravity forces
    var wind = createVector(0.2, 0);
    var gravity = createVector(0, 0.1 * movers[i].mass);

    // Method for calculating the force being applied to each object
    var c = 0.5;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = p5.Vector.mult(movers[i].velocity, -1);
    friction.normalize();
    friction.mult(frictionMag);

    // Calling functions for adding forces
    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);

    movers[i].checkEdges();
    movers[i].update();
    movers[i].render();
  }
}
