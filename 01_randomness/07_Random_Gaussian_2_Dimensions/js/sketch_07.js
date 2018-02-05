/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_07
*/

var colors = ['#fe3366', '#fe4d7a', '#fe1b53', '#fe80a0', '#ffccd9'];

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

    // Returns a random number between 1 / -1 (68%), 2 / -2 (97%). Mean of 0 and Standard Deviation of 1
    var xLoc = randomGaussian();
    var yLoc = randomGaussian();

    // Setting up the Standard Deviation
    var xSD = 150;
    var ySD = 50;

    // Setting the mean to half the canvas width/height
    var xMean = width / 2;
    var yMean = height / 2;

    // Calculating the x/y co-ordinates for the circle
    xLoc = (xLoc * xSD) + xMean;
    yLoc = (yLoc * ySD) + yMean;

    // Randomly selecting a color from the array declared above
    var rColor = floor(random(colors.length));

    // Calculating the difference between the position of the circle to the mean
    var xDifference = Math.abs(xLoc - xMean);
    var yDifference = Math.abs(yLoc - yMean);

    // Depending on the difference between the position of the circle and mean, the size will vary in size
    var radius = map(xDifference, 0, width / 2, 15, 1);

    fill(colors[rColor]);
    noStroke();
    ellipse(xLoc, yLoc, radius, radius);
}
