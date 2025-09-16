let position;
let velocity;
let acceleration;

function setup() {
    createCanvas(innerWidth, innerHeight);
    position = createVector(200, 200);
        velocity = createVector(5, 8);
        background(0);
frameRate(20);
}

function draw() {

    push();
    stroke(200, 100, random(255));
    strokeWeight(1);
line(position.x, position.y, 80, 20, 0);
    pop();



const mouse = createVector(mouseX, mouseY);
acceleration = p5.Vector.sub(mouse, position);
acceleration.normalize();
acceleration.mult(0.5);

velocity.add(acceleration);
velocity.limit(10);
    position.add(velocity);


}
