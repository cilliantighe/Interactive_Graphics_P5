/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_08
*/

// Variable to act as an object of the 'Walker' class
var walker;

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

    // Creating an object of the 'walker' class
    walker = new Walker();
}

// The 'draw' function is called in a loop. Everything that is in the function is executed continuously
function draw() {

    noStroke();
    fill(255, 50);
    rect(0, 0, width, height)
    // Calling the render and step function in a loop
    walker.render();
    walker.step();
}

function Walker() {
    // Positioning the 'walker' in the centre of the canvas
    this.x = width / 2;

    // A variable that will hold a random number between 0 - width of canvas
    this.xOff = random(width);

    // Creating a function called 'render' that draws an 'ellipse' at the given co-ordinates
    this.render = function () {
        noStroke();
        fill(255, 0, 200, 50);
        ellipse(this.x, height / 2, 40, 40);
    }

    // Creating a function called 'step' to move the current position of the 'ellipse'
    this.step = function () {

        // Changing the position of the 'x' co-ordinate by using the 'noise' function to return a number between 0/1 and upscale that to 0/width of the canvas
        this.x = map(noise(this.xOff), 0, 1, 0, width);

        // Increment xOff
        this.xOff += 0.005;
    }
}