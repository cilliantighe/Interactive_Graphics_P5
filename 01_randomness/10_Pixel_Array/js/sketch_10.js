/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_10
*/

// Setting variables;
var x = 0;
var y = 0;


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

    // Loads a snapshot of the current window into the 'pixels' array
    loadPixels();

    // Variable to point to the desired pixel on the screen
    var index = (x + (y * width)) * 4;

    // 0 = Red, 1 = Green, 2 = Blue, 3 = Alpha
    pixels[index + 0] = 254;
    pixels[index + 1] = 51;
    pixels[index + 2] = 102;
    pixels[index + 3] = 255;

    // Updates any changes that were made to the 'pixel' array
    updatePixels();
}
