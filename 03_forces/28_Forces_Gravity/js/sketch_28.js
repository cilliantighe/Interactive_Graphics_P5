/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_28
*/

// Variable for mover array
var movers = [];

var count = 200;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  for(var i = 0; i < count; i++){
    movers[i] = new Mover(floor(random(5, 20)));
  }

  // Repositioning the canvas
  canvas.parent('canvas');

}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  background(255);

  for(var i = 0; i < count; i++){
    // Creating vector variables
    var wind = createVector(0.1, 0);
    var gravity = createVector(0, 0.1 * movers[i].mass);

    // Applying multiple forces to the mover object
    //movers[i].applyForce(wind);
    movers[i].applyForce(gravity);

    movers[i].checkEdges();
    movers[i].update();
    movers[i].render();
  }
}
