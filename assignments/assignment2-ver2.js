let startPoint;
let position;
let velocity;
let acceleration;
let startLines = false;

function setup() {
    createCanvas(innerWidth, innerHeight);
        background(0);
frameRate(30);
}


function drawLines() {

       push();
    stroke(255, 255, 255);
    strokeWeight(1);
line(startPoint.x, startPoint.y, position.x, position.y);
    pop();
}

function draw() {

if (startLines) {
    drawLines();
    
    const mouse = createVector(mouseX, mouseY);
    acceleration = p5.Vector.sub(mouse, position);
    acceleration.normalize();
    acceleration.mult(0.5);
    
    velocity.add(acceleration);
    velocity.limit(10);
        position.add(velocity);
}
}

function mouseClicked() {
    startLines = !startLines;

    startPoint = createVector(mouseX, mouseY);
    position = createVector(mouseX, mouseY);
    velocity = createVector(5, 8);
}

