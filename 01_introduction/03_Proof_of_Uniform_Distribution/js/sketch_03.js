/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_03
*/

// Array to hold the height of every rectangle to be drawn
var rectArray = [];
var total = 20;

// The 'setup' function is only called once. Everything within the function is executed once
function setup() {

    // Creates the canvas for the animation to be displayed on
    // Gets the width of the div so the canvas can take up all the space
    var cWidth = $("#canvas").width();
    var cHeight = 500;
    var canvas = createCanvas(cWidth, cHeight);

    // Repositioning the canvas
    canvas.parent('canvas');

    // Loop to set every index in the rectangle array to '0'
    for (var i = 0; i < total; i++) {
        rectArray[i] = 0;
    }
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {
    // Background will be redrawn every time
    background(255);

    // Randomly select a number between 0-19
    var index = floor(random(total));

    //Increment the number at that index
    rectArray[index]++;

    // Setting up the style of the rectangles
    stroke(0);
    strokeWeight(2);
    fill(255);

    // Calculating the width of each rectangle by dividing the 'width' by the number of rectangles
    var w = width / rectArray.length;

    // Loop to draw rectangles
    for (var i = 0; i < rectArray.length; i++) {
        // The 'x' position of each rectangle is calculated by multiplying its width by its index position
        // The 'y' position is calculated by subtracting the height of the canvas by the current number in the index position
        rect(i * w, height - rectArray[i], w - 1, rectArray[i]);
    }
}