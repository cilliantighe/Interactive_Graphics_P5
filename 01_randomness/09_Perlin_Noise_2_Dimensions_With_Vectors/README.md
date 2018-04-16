## Perlin Noise: 2 Dimensions with Vectors

### Walker Class
This version of the walker class will be using vectors and 2 dimensions. The variable 'position' will now be a vector that holds both the 'x' and 'y' co-ordinate. The 'nOff' will also do the same.

```js
  // Creating vectors for the position and nOff
  this.position = createVector(width / 2, height / 2);

  this.nOff = createVector(floor(random(width)), floor(random(height)));
```

The step function now calculates the new position for the 'x' and 'y' co-ordinate by using vectors. Vectors have built in functions that make is easier to manipulate. The add function is used here to increment the value of the 'nOff'

```js
  // Creating a function called 'step' to move the current position of the 'ellipse'
  this.step = function () {


      //Constraining the point within the canvas
      this.position.x = map(noise(this.nOff.x), 0, 1, 0, width);
      this.position.y = map(noise(this.nOff.y), 0, 1, 0, height);
      this.nOff.add(0.005, 0.005);
  }
```

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/09_Perlin_Noise_2_Dimensions_With_Vectors/)
