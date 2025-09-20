let position;
let velocity;
let acceleration;
let colors = [
    [137, 207, 240],
    [255, 182, 193],
    [25, 25, 62]
];

function setup() {
    createCanvas(innerWidth, innerHeight);
    position = createVector(width / 2, height / 2);
        velocity = createVector(5, 8);
        background(0);
frameRate(40);

}

function draw() {
    push();
    stroke(random(colors));
    strokeWeight(20);
line(width / 2, height / 2, position.x, position.y);
    pop();



const mouse = createVector(mouseX, mouseY);
acceleration = p5.Vector.sub(mouse, position);
acceleration.normalize();
acceleration.mult(0.8);

velocity.add(acceleration);
velocity.limit(10);
    position.add(velocity);
}

function mouseClicked() {
    push();
    strokeWeight(random(200));
    pop();
}


