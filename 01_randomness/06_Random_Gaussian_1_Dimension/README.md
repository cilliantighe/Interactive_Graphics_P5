## Random Gaussian: 1 Dimension

### Draw Method
This sketch will be using the 'randomGaussian' function that is a part of the P5 library. It returns a mean of 0 and standard deviation of 1. Variable 'xLoc' will hold this value. The next part is to set the standard deviation.

The standard deviation is the value that determines the placement of the circles to be drawn. 68% of the circles drawn will be within 1 standard deviation from the mean, 97% will be within 2 standard deviations from the mean etc. The mean for this sketch will be the center of the page. The formula for randomGaussian is 'xLoc = (xLoc * sd) + mean'

```js
  // Returns a random number between 1 / -1 (68%), 2 / -2 (97%). Mean of 0 and Standard Deviation of 1
  var xLoc = randomGaussian();

  // Setting Standard Deviation to 100
  var sd = 100;

  // Mean is half the width of the canvas (centered)
  var mean = width / 2;

  // Calculating the correct position of the circle to be drawn
  xLoc = (xLoc * sd) + mean;

  fill(254, 51, 102, 10);
  noStroke();
  ellipse(xLoc, height / 2, 16, 16);
```

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/06_Random_Gaussian_1_Dimension/)
