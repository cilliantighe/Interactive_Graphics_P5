// A seperate class file for the 'Mover' class
function Mover(m) {
  this.location = createVector(30, 30);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = m;

  this.angle = 0;
  this.aVelocity = 0;
  this.aAcceleration = 0.001;

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(2);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

    this.aAcceleration = this.velocity.x;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.05, -0.05);
    this.angle += this.aVelocity;
  }

  this.render = function() {
    noStroke();
    fill(254, 51, 102);

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, this.mass, this.mass);
    pop();
  }

  this.checkEdges = function() {
    if (this.location.x + this.mass / 2 >= width) {
      this.velocity.x = this.velocity.x * -1;
      this.location.x = width - this.mass / 2;
    }
    if (this.location.x - this.mass / 2 <= 0) {
      this.velocity.x = this.velocity.x * -1;
      this.location.x = 0 + this.mass / 2;
    }

    if (this.location.y + this.mass / 2 >= height) {
      this.velocity.y = this.velocity.y * -1;
      this.location.y = height - this.mass / 2;
    }
    if (this.location.y - this.mass / 2 <= 0) {
      this.velocity.y = this.velocity.y * -1;
      this.location.y = 0 + this.mass / 2;
    }
  }


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f);
  }
}
