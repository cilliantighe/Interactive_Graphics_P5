// A seperate class file for the 'Mover' class
function Mover(m) {

  this.location = createVector(random(width), 100);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = m;


  this.update = function() {
    this.velocity.add(this.acceleration);
    //this.velocity.limit(5);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.render = function() {
    noStroke();
    fill(254, 51, 102);
    ellipse(this.location.x, this.location.y, this.mass*16, this.mass*16);
  }

  this.checkEdges = function() {
    if (this.location.x + this.mass * 8 >= width) {
      this.velocity.x = this.velocity.x * -1;
      this.location.x = width - this.mass * 8;
    }
    if (this.location.x - this.mass * 8 <= 0) {
      this.velocity.x = this.velocity.x * -1;
      this.location.x = 0 + this.mass * 8;
    }

    if (this.location.y + this.mass * 8 >= height) {
      this.velocity.y = this.velocity.y * -1;
      this.location.y = height - this.mass * 8;
    }
    if (this.location.y - this.mass * 8 <= 0) {
      this.velocity.y = this.velocity.y * -1;
      this.location.y = 0 + this.mass * 8;
    }
  }


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f);
  }
}
