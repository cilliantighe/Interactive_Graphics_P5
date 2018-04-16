// A seperate class file for the 'Mover' class
function Mover(_size) {

  // Instance variables for the class
  this.maxSpeed = 5;
  this.diameter = _size;
  this.location = createVector(random(width), random(height));
  this.velocity = createVector(3, 3);
  this.acceleration = createVector();

  // Function to render the circle on the canvas
  this.render = function() {
    var angle = this.acceleration.heading();
    noStroke();
    fill(254, 51, 102);
    push();
    translate(this.location.x, this.location.y);
    rotate(angle);
    rect(0, 0, this.diameter * 2, this.diameter);
    pop();
  }

  // Function for updating the position on the circle
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.05);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);
  }

  // Function for checking whether the circle has reached the edge of the canvas
  this.checkEdges = function() {
    if (this.location.x - (this.diameter / 2) <= 0 || this.location.x + (this.diameter / 2) >= width) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.location.y - (this.diameter / 2) <= 0 || this.location.y + (this.diameter / 2) >= height) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}
