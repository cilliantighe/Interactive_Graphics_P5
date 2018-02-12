## Vector: 2 Dimensions

Similar to the previous sketch, this one will be using two dimensions. A new variable
called 'ySpeed' is created for the speed in the 'y' direction.

### Draw Method
The x and y position is incremented every time the draw function is called.

```js

  // Incrementing the position of the ellipse
  x = x + xSpeed;
  y = y + ySpeed;

```

A simple statement checks whether the circle has reached either side of the canvas and reverses it's direction in both the x and y direction.

```js
  // Checking whether the ball has reached a side of the canvas and reverse it
  if ((x + (diameter / 2) >= width) || (x - +(diameter / 2) <= 0)) {
    xSpeed = xSpeed * -1;
  }
  if ((y + (diameter / 2) >= height) || (y - +(diameter / 2) <= 0)) {
    ySpeed = ySpeed * -1;
  }
```
