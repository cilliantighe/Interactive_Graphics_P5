## Vector: 1 Dimension

There are four variables defined globally. x, y, xSpeed and diameter. The x and y variables will be used to hold the appropiate co-ordinates.
The xSpeed is for the speed at which the circle moves after each frame. The diameter variable is for the size of the circle.

### Draw Method
The background is redrawn each frame to give the illusion that the circle is moving across the screen.

```js

  // Setting the color of the canvas background
  background(255);

```

The x position is incremented every time the draw function is called.

```js

  // Incrementing the position of the ellipse
  x = x + xSpeed;

```

A simple statement checks whether the circle has reached either side of the canvas and reverses it's direction

```js
  // Checking whether the ball has reached a side of the canvas and reverse it
  if ((x + (diameter / 2) >= width) || (x - +(diameter / 2) <= 0)) {
    xSpeed = xSpeed * -1;
  }
```

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/02_vectors/15_Vector_1_Direction/)
