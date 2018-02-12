## Pixel Array: Loop Static

### Draw Method
The 'Static' sketch gives the illusion of static appearing on the screen. This is accomplished by randomly selecting a number between 0-255 and assigned the value to the RGB parameters.

```js
  // Loop for indexing through each pixel on the screen
  for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
          var index = (x + (y * width)) * 4;

          // Each pixel on the screen will range from black to white on the screen. Giving the display a static look
          var bright = random(255);
          pixels[index + 0] = bright;
          pixels[index + 1] = bright;
          pixels[index + 2] = bright;
          pixels[index + 3] = 255;
      }
  }
```
