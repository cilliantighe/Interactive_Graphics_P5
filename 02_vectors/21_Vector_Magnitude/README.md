## Vector: Vector Magnitude

In this example we use the 'sub' function to subtract two vectors from each other.
In this sketch we create a mouse vector to hold the (x, y) co-ordinates of the
mouse as it moves. Another vector is created to hold the center (x, y) location
of the canvas. A new vector is then created by subtracting the center vector from the
mouse vector. As the mouse moves, the vector values will also change.

### Draw Method

In this example we will be using the 'mag' function. This refers to 'Magnitude'.
Magnitude is the length of a vector. By calling the mag function the value returned
to the variable 'm' is the length of 'vectorLine'. This value will be used to draw
a rectangle on the top of the screen to mirror the length of the vector as the mouse
is moved around the screen.

```js
// Delcaring variables to hold the mouse position, center of the canvas and the difference between them
var mouse = createVector(mouseX, mouseY);
var center = createVector(width / 2, height / 2);
var vectorLine = mouse.sub(center);

/*
This will draw a rectangle on the top of the canvas with the same
magnitude as the line between the mouse and centerpoint
*/
var m = vectorLine.mag();
fill(254, 51, 102);
rect(0, 0, m, 10);
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

\---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/02_vectors/21_Vector_Magnitude/)
