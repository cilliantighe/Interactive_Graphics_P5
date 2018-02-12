## Pixel Array: Loop Cloud

A variable named 'yOff' is declared globally.

### Draw Method
This sketch will be using the noise function used in previous sketches to create a cloud illusion. Since the noise returns values close to neighboring numbers, the sketch will create a smooth cloud image. 

```js
  // Loop for indexing through each pixel on the screen
  for (var y = 0; y < height; y++) {
      var xOff = 0.0;
      for (var x = 0; x < width; x++) {
          var index = (x + (y * width)) * 4;
          var bright = map(noise(xOff, yOff), 0, 1, 0, 255);
          pixels[index + 0] = bright;
          pixels[index + 1] = bright;
          pixels[index + 2] = bright;
          pixels[index + 3] = 255;

          xOff += 0.002;
      }
      yOff += 0.002;
  }
```
