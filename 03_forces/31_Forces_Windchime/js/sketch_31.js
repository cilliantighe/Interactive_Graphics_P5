/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_31
*/

var windChimes = [];
var movers = [];

var noOfMovers = 500;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');

  for (var i = 0; i < noOfMovers; i++) {
    movers[i] = new Mover(floor(random(width)), floor(random(height)), 0, 0, 0, 0, random(0.5, 2));
  }

  windChimes[0] = new WindChime(55, 55, random(1), 0, 90);
  windChimes[1] = new WindChime(1050, 55, random(1), 90, 180);
  windChimes[2] = new WindChime(1050, 420, random(1), 180, 270);
  windChimes[3] = new WindChime(55, 420, random(1), 270, 360);

}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
  background(255);

  for (var j = 0; j < movers.length; j++) {
    for (var i = 0; i < windChimes.length; i++) {
      movers[j].applyForce(windChimes[i].windVec);
    }
    movers[j].update();
    movers[j].render();
    movers[j].checkEdges();
  }

  for (var i = 0; i < windChimes.length; i++) {
    windChimes[i].update();
    windChimes[i].render();
  }

}
