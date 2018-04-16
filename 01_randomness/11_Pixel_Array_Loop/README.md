## Pixel Array: Loop

### Draw Method
The 'Loop' sketch uses a nested for loop to target every pixel on the screen. The first loop is for the 'y' direction and the second loop is for the 'x' direction. This means that on every pixel going across the screen is targeted before moving onto the next row.

```js
  // Loop for indexing through each pixel on the screen
  for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
          var index = (x + (y * width)) * 4;

          // The loop will color the entire screen red
          pixels[index + 0] = 254;
          pixels[index + 1] = 51;
          pixels[index + 2] = 102;
          pixels[index + 3] = 255;
      }
  }
```

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/11_Pixel_Array_Loop/)
