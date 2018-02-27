// A seperate class file for the 'Mover' class
function WindChime(_xPos, _yPos, _windMag, _startAngle, _endAngle) {

  this.xPos = _xPos;
  this.yPos = _yPos;
  this.windMag = _windMag;
  this.startAngle = _startAngle;
  this.endAngle = _endAngle;
  this.windVec = createVector();
  this.time = 1000;

  this.update = function() {

    this.windDir = map(noise(this.time), 0, 1, this.startAngle, this.endAngle);
    this.windVec = p5.Vector.fromAngle(radians(this.windDir), this.windMag);
    this.time = this.time + 0.01;
  }

  this.render = function() {
    push();
    translate(this.xPos, this.yPos);
    scale(0.5, 0.5);
    fill(0);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    text("Magnitude: " + nf(this.windMag, 1, 2), 0, 100);
    text("Wind Direction: " + nf(this.windDir, 1, 2), 0, 125);
    stroke(0);
    strokeWeight(4);
    fill(255, 0);
    ellipse(0, 0, 150, 150);
    rotate(this.windVec.heading());
    line(-65, 0, 65, 0);
    fill(0);
    triangle(40, -15, 65, 0, 40, 15);
    pop();
  }
}
