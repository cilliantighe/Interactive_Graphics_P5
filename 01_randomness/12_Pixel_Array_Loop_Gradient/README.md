## Pixel Array: Loop Gradient

### Draw Method
In this sketch the values from 'x' and 'y' are used within the RGB values to create a gradient effect on the canvas.

```js
  // Loop for indexing through each pixel on the screen
  for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
          var index = (x + (y * width)) * 4;

          // The screen will display a gradient effect on the screen
          pixels[index + 0] = 255;
          pixels[index + 1] = y;
          pixels[index + 2] = x;
          pixels[index + 3] = 255;
      }
  }
```

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/12_Pixel_Array_Loop_Gradient/)
