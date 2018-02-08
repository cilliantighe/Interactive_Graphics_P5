## Proof of Uniform Distribution

### Global Variables
For this next sketch, global variables will be instantiated. This way the variables that are declared globally can be used by both the 'setup' and 'draw' method.

### Setup Method
The setup for the canvas remains the same from previous sketches. In this setup there is a 'for' loop that loops through an array and sets the value of each index field to 0.

```js
  for (var i = 0; i < total; i++) {
    rectArray[i] = 0;
  }
```

### Draw Method
The draw function will redraw the canvas background every frame. This will give the illusion that an object is moving when their position is changed. Each time the draw function is called, a random number is selected (0-19) and assigned to the variable 'index'. This variable is then used to select a position in the 'rectArray' and increment the number in that index location.
The rectangle is then styled with a stroke and fill color. The width of each rectangle is calculated by dividing the width by number of rectangles to be drawn.
A for loop is then used to create each rectangle. The 'x' position of each rectangle is calculated by multiplying the width by the current index number of the array. The height is then calculated by subtracting the value of the current index into the height of the canvas. This way the rectangle will be drawn from the bottom of the canvas. The width has already be calculated previously but '1' has been subtracted by it for padding. Finally, the height is taken from the value of the current index selected.

```js
  // Calculating the width of each rectangle by dividing the 'width' by the number of rectangles
  var w = width / rectArray.length;

  // Loop to draw rectangles
  for (var i = 0; i < rectArray.length; i++) {
      // The 'x' position of each rectangle is calculated by multiplying its width by its index position
      // The 'y' position is calculated by subtracting the height of the canvas by the current number in the index position
      rect(i * w, height - rectArray[i], w - 1, rectArray[i]);
    }
```
