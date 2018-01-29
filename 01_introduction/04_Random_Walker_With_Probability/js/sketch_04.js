/*
Interactive Graphics
Author: Cillian Tighe
Student No: N00152737
Sketch_04
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
    // Calling the render and step function in a loop
    walker.render();
    walker.step();
}

function Walker() {
    // Positioning the 'walker' in the centre of the canvas
    this.x = width / 2;
    this.y = height / 2;

    // Creating a function called 'render' that draws a point at the given co-ordinates
    this.render = function () {
        stroke(50);
        point(this.x, this.y);
    }

    // Creating a function called 'step' to move the current position of the 'point'
    this.step = function () {

        // An array that increases the probability of certain numbers being picked
        // '-1' has 40%, '0' has 40%, '1' has 20%
        var probArray = [];
        probArray[0] = 0;
        probArray[1] = 1;
        probArray[2] = -1;
        probArray[3] = -1;
        probArray[4] = 0;

        // Randomly getting a number based off the length of the array. Length is 5. Random number 0-5
        var xIndex = floor(random(probArray.length));
        var yIndex = floor(random(probArray.length));

        // Retrieving the number from the array and placing it into a variable
        var xDirection = probArray[xIndex];
        var yDirection = probArray[yIndex];

        // Adding the selected number to the current position
        this.x = this.x + xDirection;
        this.y = this.y + yDirection;

        //Constraining the position within the canvas
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}