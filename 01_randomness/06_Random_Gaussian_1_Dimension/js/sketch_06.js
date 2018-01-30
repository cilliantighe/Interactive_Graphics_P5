/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_06
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

    // Setting the color of the canvas background
    background(255);
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

    // Returns a random number between 1 / -1 (68%), 2 / -2 (97%). Mean of 0 and Standard Deviation of 1
    var xLoc = randomGaussian();
    console.log(xLoc);
    
    // Setting Standard Deviation to 60
    var sd = 60;
    
    // Mean is half the width of the canvas (centred)
    var mean = width / 2;
    
    // Calculating the correct position of the circle to be drawn
    xLoc = (xLoc * sd) + mean;

    fill(0, 10);
    noStroke();
    ellipse(xLoc, height / 2, 16, 16);
}
