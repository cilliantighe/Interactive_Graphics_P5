## Random Walker: Tendency to the Right

### Step Method
This sketch will be looking at another way with manipulating probability. In the 'step' function a variable named 'r' holds a number that is randomly selected between 0-1. If statements are then followed by this.

The probability of the first if statement being true is 40%, the next statement has a 20% chance of being true, the next statement also has a 20% chance of being true and the last statement is if anything above was false but it also has a 20% chance of being true.
This is a another way to manipulate the outcome of randomness.

```js
  // The random function will return a float between 0-1
  var r = random(1);

  // Here we are controlling the probability of the direction of the point
  if (r < 0.4) {
      this.x++;
  } else if (r < 0.6) {
      this.x--;
  } else if (r < 0.8) {
      this.y++;
  } else {
      this.y--;
  }
```

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/05_Random_Walker_With_Tendency_to_the_Right/)
