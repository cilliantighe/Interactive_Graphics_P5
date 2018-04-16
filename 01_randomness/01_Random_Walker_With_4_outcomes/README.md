## Random Walker: 4 Outcomes

### Walker Class
In this exercise a class called 'Walker' is created. The Walker class has two instance variables. These are; 'x' and 'y'.
When referring to instance variables in a class you must use 'this'

```js
function Walker() {
    this.x = width / 2;
    this.y = height / 2;
}
```

This also applies to methods within the class.

```js
function Walker() {
  this.render = function () {
        stroke(50);
        point(this.x, this.y);
    }
  this.step = function () {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else if (choice === 3) {
            this.y--;
        }
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}
```

As shown above, the Walker class has two methods. 'render' and 'step' are methods that are unique to each instance of the Walker class.

#### Render Method
This method sets the stroke of the point to be created to '50' (dark grey) and then calls the 'point' method to draw a point at the co-ordinates given

#### Step Method
The step method randomly selects a number between 0-4. Depending on what number was chosen, it will check to see which case is correct and increase/decrease the x/y position.
The 'constrain' function below ensures that the x/y co-ordinates stay within the canvas bounds

### Setup & Draw Method
In P5 there are two main methods that need to be called. These are 'setup' and 'draw'. Everything that is wrapped within the setup method is only called **ONCE**

```js
function setup() {
    var cWidth = $("#canvas").width();
    var cHeight = 500;
    var canvas = createCanvas(cWidth, cHeight);

    canvas.parent('canvas');

    background(255);

    walker = new Walker();
}
```

In the code above I'm using a bit of JQuery to get the width of the element with the id of 'canvas'. I'm doing this to allow the size of the canvas to be dynamic. After that, the canvas is created with the desired sizes and moved to be a parent of 'canvas'. This way it sits inside the div and takes up the full space.
The color of the background is then set to '255' and an object is created from the 'Walker' class.

In contrast to setup, draw does everything within the method in a contiguous loop

```js
function draw() {
    walker.render();
    walker.step();
}
```

The draw method will call the render and step method in a loop which will result in a dot moving across the screen

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/01_Random_Walker_With_4_outcomes/)
