## Perlin Noise: 1 Dimension

### Walker Class
This sketch will be using a modified version of the 'Walker' class. There are two instance variables. The first one is the 'x' variable. This variable will hold the position of the x direction. The second variable is the 'xOff'. This variable will be used to calculate the new position of the x co-ordinate.

```js
  // Positioning the 'walker' in the center of the canvas
  this.x = width / 2;

  // A variable that will hold a random number between 0 - width of canvas
  this.xOff = random(width);
```

The next part of the class is the 'render' function. This function will draw an ellipse with no stroke.

```js
  // Creating a function called 'render' that draws an 'ellipse' at the given co-ordinates
  this.render = function () {
      noStroke();
      fill(254, 51, 102);
      ellipse(this.x, height / 2, 40, 40);
  }
```

The final function is the 'step' function. The 'x' variable's new position is calculated by using the map function. The first parameter of the function is the variable to be used.
The noise function is being called on the 'xOff' variable. The noise function will always return a number between 0-1. Each number returned is similar to neighboring numbers. The number returned from the map function will be the new 'x' position. The variable 'xOff' is then incremented.

```js
  // Creating a function called 'step' to move the current position of the 'ellipse'
  this.step = function () {

      // Changing the position of the 'x' co-ordinate by using the 'noise' function to return a number
      // between 0/1 and upscale that to 0/width of the canvas
      this.x = map(noise(this.xOff), 0, 1, 0, width);

      // Increment xOff
      this.xOff += 0.005;
}
```
