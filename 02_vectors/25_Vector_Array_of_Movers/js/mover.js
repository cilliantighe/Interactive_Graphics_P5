// A seperate class file for the 'Mover' class
function Mover() {

  // Instance variables for the class
  this.maxSpeed = 5;
  this.diameter = random(6);
  this.location = createVector(random(width), random(height));
  this.velocity = createVector(3, 3);
  this.acceleration = createVector();
  this.color = [random(255), random(255), random(255)];

  // Function to render the circle on the canvas
  this.render = function() {
    noStroke();
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
  }

  // Function for updating the position on the circle
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);

    this.acceleration = p5.Vector.sub(mouse, this.location);
    this.acceleration.setMag(0.1);

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

  // Function for upsizing the circles
  this.upSize = function() {
    this.diameter = this.diameter * 2;
  }

  // Function for downsizing the circles
  this.downSize = function() {
    this.diameter = this.diameter * .5;
  }
}
