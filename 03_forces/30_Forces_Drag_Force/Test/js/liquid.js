function Liquid(x, y, w, h, c){

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.coefficient = c;

  this.render = function(){
    noStroke();
    fill(0, 51, 102);
    rect(this.x, this.y, this.width, this.height);
  }

  this.contains = function(mover){
    if(mover.location.x > this.x && mover.location.x < this.x + this.width && mover.location.y > this.y && mover.location.y < this.y + this.height){
      return true;
    }
    else{
      return false;
    }
  }

  this.calculateDrag = function(mover){
    var speed = mover.velocity.mag();
    var dragMag = this.coefficient * speed * speed;

    var dragForce = mover.velocity.copy();
    dragForce.mult(-1);

    dragForce.normalize();
    dragForce.mult(dragMag);
    return dragForce;
  }
}
