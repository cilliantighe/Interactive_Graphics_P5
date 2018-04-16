## Random Gaussian: 2 Dimensions

### Draw Method
This sketch will be using two dimensions to place the circles to be drawn. Similar to the previous sketch, this one will be using the 'randomGaussian' function but it will be used for both the x and y direction.A standard deviation, mean and loc variable are declared for the x and y positions. The standard deviation does not have to be the same for the x and y.

```js
  // Returns a random number between 1 / -1 (68%), 2 / -2 (97%). Mean of 0 and Standard Deviation of 1
  var xLoc = randomGaussian();
  var yLoc = randomGaussian();

  // Setting up the Standard Deviation
  var xSD = 150;
  var ySD = 50;

  // Setting the mean to half the canvas width/height
  var xMean = width / 2;
  var yMean = height / 2;

  // Calculating the x/y co-ordinates for the circle
  xLoc = (xLoc * xSD) + xMean;
  yLoc = (yLoc * ySD) + yMean;
```

The next part of the code calculates the difference between the 'xLox' and 'xMean'. Math.abs makes sure that the number returned is a positive number. The radius variable is calculated by using the map function. The first parameter is the variable you want to use.

The next two parameters are the possible outcomes of the variable. The last two parameters are the scaling of the results. The code will have a larger radius for the 'xLoc' variables that are closer to the 'xMean' and a smaller radius further from the 'xMean'

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/07_Random_Gaussian_2_Dimensions/)
