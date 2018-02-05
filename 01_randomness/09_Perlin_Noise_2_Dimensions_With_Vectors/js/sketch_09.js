/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_09
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

    this.position = createVector(width / 2, height / 2);
    this.nOff = createVector(floor(random(width)), floor(random(height)));

    // Creating a function called 'render' that draws a point at the given co-ordinates
    this.render = function () {
        noStroke();
        fill(254, 51, 102);
        ellipse(this.position.x, this.position.y, map(noise(this.nOff.x), 0, 1, 20, 200), map(noise(this.nOff.x), 0, 1, 20, 200));
    }

    // Creating a function called 'step' to move the current position of the 'ellipse'
    this.step = function () {


        //Constraining the point within the canvas
        this.position.x = map(noise(this.nOff.x), 0, 1, 0, width);
        this.position.y = map(noise(this.nOff.y), 0, 1, 0, height);
        this.nOff.add(0.005, 0.005);
    }
}
