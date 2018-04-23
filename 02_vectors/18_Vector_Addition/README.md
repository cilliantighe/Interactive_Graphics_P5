## Vector: Vector Addition

One of the many useful applications for vectors is the ability to use built in
functions like 'add'. This allows you to add vectors together. In this sketch
we're using the add function to accumulate the position with the velocity.

### Draw Method

The position vector is increased every time the draw function is called

```js
// Incrementing the position of the ellipse using vector addition
position.add(velocity);
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

\---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/02_vectors/18_Vector_Addition/)
