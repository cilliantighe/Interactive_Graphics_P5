/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_14
*/

var yOff = 0.0;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

    // Creates the canvas for the animation to be displayed on
    // Gets the width of the div so the canvas can take up all the space
    var cWidth = $("#canvas").width();
    var cHeight = 500;
    var canvas = createCanvas(cWidth, cHeight);
    frameRate(30);
    pixelDensity(1);
    noiseDetail(10);

    // Repositioning the canvas
    canvas.parent('canvas');

    // Setting the color of the canvas background
    background(255);
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

    // Loads a snapshot of the current window into the 'pixels' array
    loadPixels();

    // Loop for indexing through each pixel on the screen
    for (var y = 0; y < height; y++) {
        var xOff = 0.0;
        for (var x = 0; x < width; x++) {
            var index = (x + (y * width)) * 4;
            var bright = map(noise(xOff, yOff), 0, 1, 0, 255);
            pixels[index + 0] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;

            xOff += 0.002;
        }
        yOff += 0.002;
    }
    updatePixels();
}
