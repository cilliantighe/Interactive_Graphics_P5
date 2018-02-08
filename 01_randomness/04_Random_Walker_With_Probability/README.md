## Random Walker: Probability

### Step Method
In this version of the 'Random Walker' the only thing different is the 'step' method. This sketch shows how to control probability. An array, 'probArray' is created. Indexes 0-4 have been initialised to different values. As seen in the previous sketch, the random function is not entirely random. However, it can be manipulated. In the array there are two '-1', two '0' and one '1'. Therefore there is a 40% chance for '-1' or '0' to be selected and 20% chance for '1' to be selected.
A random number (0-4) is selected for 'yIndex' and 'xIndex'. That number is then used as the index number for the array and the value from that position is then extracted.

```js
  // An array that increases the probability of certain numbers being picked
  // '-1' has 40%, '0' has 40%, '1' has 20%
  var probArray = [];
  probArray[0] = 0;
  probArray[1] = 1;
  probArray[2] = -1;
  probArray[3] = -1;
  probArray[4] = 0;

  // Randomly getting a number based off the length of the array. Length is 5. Random number 0-5
  var xIndex = floor(random(probArray.length));
  var yIndex = floor(random(probArray.length));

  // Retrieving the number from the array and placing it into a variable
  var xDirection = probArray[xIndex];
  var yDirection = probArray[yIndex];
```
