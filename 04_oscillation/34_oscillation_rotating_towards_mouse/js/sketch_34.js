/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_34
*/

var moverCount = 100;
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

  for (var i = 0; i < moverCount; i++) {
    movers[i] = new Mover(random(5, 20));
  }
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  background(255);

  for (var i = 0; i < movers.length; i++) {
    movers[i].checkEdges();
    movers[i].update();
    movers[i].render();
  }

}
