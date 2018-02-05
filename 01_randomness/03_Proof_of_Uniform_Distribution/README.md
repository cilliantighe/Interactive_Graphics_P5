## Proof of Uniform Distribution

### Global Variables
For this next sketch, global variables will be instantiated. This way the variables that are declared globally can be used by both the 'setup' and 'draw' method.

### Setup method
The setup for the canvas remains the same from previous sketches. In this setup there is a 'for' loop that loops through an array and sets the value of each index field to 0.

```js
  for (var i = 0; i < total; i++) {
    rectArray[i] = 0;
  }
```

### Draw Method
