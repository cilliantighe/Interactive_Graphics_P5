/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_30
*/

  var noLiquids = 10;
  var noBalls = 10;
  var movers = [];
  var liquids = [];

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');

  for(var i = 0; i < noBalls; i++){
    // Parameters (x, y, vx, vy, ax, ay, mass)
    movers[i] = new Mover(125 * i, 50, 0, 0, 0, 0, random(.5, 3));
  }

  for(var i = 0; i < noLiquids; i++){
    liquids[i] = new Liquid(0, (height / noLiquids) * i, width, (height / noLiquids), random(1), 25 * i, 51, 102);
  }

}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
  background(255);

  for(var i = 0; i < liquids.length; i++){
    liquids[i].render();
  }

  for(var l = 0; l < liquids.length; l++){
    for(var m = 0; m < movers.length; m++){
      if(liquids[l].contains(movers[m])){
        movers[m].applyForce(liquids[l].calculateDrag(movers[m]));
      }
    }
  }

  for(var i = 0; i < movers.length; i++){

    var gravity = createVector(0, 0.1 * movers[i].mass);

    movers[i].applyForce(gravity);
    movers[i].checkEdges();
    movers[i].update();
    movers[i].render();
  }
}
