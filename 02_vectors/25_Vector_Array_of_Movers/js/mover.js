// A seperate class file for the 'Mover' class
function Mover() {

    var colors = ['#fe3366', '#fe4d7a', '#fe1b53', '#fe80a0', '#ffccd9'];

    // Instance variables for the class
    this.maxSpeed = 5;
    this.diameter = random(6);
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(3, 3);
    this.acceleration = createVector();
    this.color = floor(random(colors.length));
    this.mag = 0.1;

    // Function to render the circle on the canvas
    this.render = function () {
        noStroke();
        fill(colors[this.color]);
        ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
    }

    // Function for updating the position on the circle
    this.update = function () {
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(this.mag);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.location.add(this.velocity);
    }

    // Function for checking whether the circle has reached the edge of the canvas
    this.checkEdges = function () {
        if (this.location.x - (this.diameter / 2) <= 0 || this.location.x + (this.diameter / 2) >= width) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y - (this.diameter / 2) <= 0 || this.location.y + (this.diameter / 2) >= height) {
            this.velocity.y = this.velocity.y * -1;
        }
    }

    // Function for upsizing the circles
    this.upSize = function () {
        this.diameter = this.diameter * .5;
        this.mag = 0.5;
    }

    // Function for downsizing the circles
    this.downSize = function () {
        this.diameter = this.diameter * 2;
        this.mag = 0.1;
    }
}
