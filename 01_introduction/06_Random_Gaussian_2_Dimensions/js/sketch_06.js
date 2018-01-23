/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_06
*/

var colors = ['#ffc0d0', '#ff80a0', '#ff4070', '#ff0040', '#c00030'];

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

  // Creates the canvas for the animation to be displayed on
  // Gets the width of the div so the canvas can take up all the space
  var cWidth = $("#canvas").width();
  var cHeight = 500;
  var canvas = createCanvas(cWidth, cHeight);

  // Repositioning the canvas
  canvas.parent('canvas');

  // Setting the color of the canvas background
  background(255);
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

  var xLoc = randomGaussian();
  var yLoc = randomGaussian();

  var xSD = 50;
  var ySD = 50;

  var xMean = width / 2;
  var yMean = height / 2;

  xLoc = (xLoc * xSD) + xMean;
  yLoc = (yLoc * ySD) + yMean;

  var rColor = floor(random(colors.length));
  var radius = 4;

  var xDifference = Math.abs(xLoc - xMean);
  var yDifference = Math.abs(yLoc - yMean);

  if ((xLoc - xSD) <= xMean && (xLoc + xSD) >= xMean && (yLoc - ySD) <= yMean && yMean && (yLoc + ySD) >= yMean) {
    radius = radius + 10;
  } else if ((xLoc - xSD * 2) <= xMean && (xLoc + xSD * 2) >= xMean && (yLoc - ySD * 2) <= yMean && yMean && (yLoc + ySD * 2) >= yMean) {
    radius = radius + 6;
  } else {
    radius = radius + 2;
  }

  fill(colors[rColor]);
  noStroke();
  ellipse(xLoc, yLoc, radius, radius);
}
