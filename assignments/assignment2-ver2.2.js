let position;
let velocity;
let acceleration;

function setup() {
    createCanvas(innerWidth, innerHeight);
    position = createVector(200, 200);
        velocity = createVector(5, 8);
        background(0);
frameRate(40);
}

function draw() {
    push();
    stroke(200, 100, random(255));
    strokeWeight(20);
line(position.x, position.y, 50, innerHeight / 2);
    pop();



const mouse = createVector(mouseX, mouseY);
acceleration = p5.Vector.sub(mouse, position);
acceleration.normalize();
acceleration.mult(0.8);

velocity.add(acceleration);
velocity.limit(10);
    position.add(velocity);
}
