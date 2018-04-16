## Pixel Array

In this sketch there are two variables defined globally. 'x' and 'y' and both set to 0;

### Draw Method
This sketch will be using the 'loadPixels' and 'updatePixels' methods. The 'loadPixels' function snaps all of the pixels on the canvas into an array called 'pixels'. Each pixel on the screen can be changed.

```js
  // Variable to point to the desired pixel on the screen
  var index = (x + (y * width)) * 4;
```

This is the formula to target a specific pixel on the screen. If we let y=1, x=2 and the width=500; y refers to the row. So we're on the second row (indexes always start at 0), the width is 500 so it's 500*1 which is 500 plus 'x' which is 2. So we're targeting pixel 502 on the screen. But, we need to multiple that by 4. This is because there are 4 parameters per pixel. This refers to the 'R', 'G', 'B' and 'A'.

```js
  // 0 = Red, 1 = Green, 2 = Blue, 3 = Alpha
  pixels[index + 0] = 254;
  pixels[index + 1] = 51;
  pixels[index + 2] = 102;
  pixels[index + 3] = 255;
  }
```

The pixel above has it's RGBA values changed so the final part of the code is to call the 'updatePixels' function to apply the changes.

---> [Example Code](https://cilliantighe.github.io/Interactive_Graphics_P5/01_randomness/10_Pixel_Array/)
