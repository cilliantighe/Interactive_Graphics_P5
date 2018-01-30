## Random Walker: 9 Outcomes

### Step Method
The previous version of the code has been updated to include 9 different outcomes. The old version used 'if' statements to check conditions.
This would become messy if there were several different possibilities. In the updated version of the code, a random number between -1 and 2
is picked for both the x and y co-ordinate

```js
this.step = function () {
        var stepX = floor(random(-1, 2));
        var stepY = floor(random(-1, 2));

        this.x = this.x + stepX;
        this.y = this.y + stepY;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
```

The updated code is more efficient than the old code. This structure allows for 9 possibilities.
1. 0,0
2. 0,1
3. 0,-1
4. 1,0
5. 1,1
6. 1,-1
7. -1,0
8. -1,1
9. -1,1
