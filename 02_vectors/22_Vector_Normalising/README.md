## Vector: Vector Normalising

In this example we use the 'sub' function to subtract two vectors from each other.
In this sketch we create a mouse vector to hold the (x, y) co-ordinates of the
mouse as it moves. Another vector is created to hold the center (x, y) location
of the canvas. A new vector is then created by subtracting the center vector from the
mouse vector. As the mouse moves, the vector values will also change.

### Draw Method

The 'normalize' function reduces the magnitude of the vector to a length of 1 (unit vector).
Doing this allows control over the length of the vector. By multiplying the vector by
'50' we know now that the length is 50 as it has been normalized.

```js
// Delcaring variables to hold the mouse position, center of the canvas and the difference between them
var mouse = createVector(mouseX, mouseY);
var center = createVector(width / 2, height / 2);
var vectorLine = mouse.sub(center);

// Normalising will reduce the size of the vector line to a length of 1 unit
vectorLine.normalize();
vectorLine.mult(50);
```

A translation is then used to change the starting point of the canvas. A line is then
drawn from the 'vectorLine' vector. This displays a line from the centre to the mouse
location on the canvas

```js
// In order to draw the line at the appropriate location, we need to translate the line to be drawn
translate(width / 2, height / 2);
strokeWeight(2);
stroke(254, 51, 102);
line(0, 0, vectorLine.x, vectorLine.y);
```

\---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/02_vectors/22_Vector_Normalising/)
