function Liquid (_x, _y, _width, _height, _coefficient){

  this.location = createVector(_x, _y);
  this.size = createVector(_width, _height);
  this.coefficient = _coefficient;

  this.render = function(){
    noStroke();
    fill(0, 51, 102);
    rect(this.location.x, this.location.y, this.size.x, this.size.y);
  }

  this.contains = function(mover){
    if(mover.location.x > this.location.x && mover.location.x < this.location.x + this.size.x && mover.location.y > this.location.y && mover.location.y < this.location.y + this.size.y){
      return true;
    }
    else{
      return false;
    }
  }

  this.calculateDrag = function(mover){
    var speed = mover.velocity.mag();
    var dragMag = this.coefficient * speed * speed;

    var dragForce = p5.Vector.mult(mover.velocity, -1);

    dragForce.normalize();
    dragForce.mult(dragMag);
    return dragForce;
  }
}
