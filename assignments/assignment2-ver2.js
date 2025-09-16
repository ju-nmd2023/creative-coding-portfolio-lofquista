// let position;
// let velocity;
// let acceleration;

// function setup() {
//     createCanvas(innerWidth, innerHeight);
//     position = createVector(200, 200);
//         velocity = createVector(5, 8);
//         background(0);
// frameRate(20);
// }

// function draw() {
//     // noStroke();

//     push();
//     // fill(15, random(200), 255);
//     stroke(200, 100, random(255));
//     strokeWeight(20);
// line(position.x, position.y, 80, 20, 0);
//     pop();

// // push();
// // fill(55, random(255), 200);
// // ellipse(position.x, height - position.y, random(10));
// // ellipse(width - position.x, position.y, random(10));
// // pop();

// // if (position.x > width || position.x < 0) {
// // velocity.x *= -1;
// // }

// // if (position.y > height || position.y < 0) {
// // velocity.y *= -1;
// // }

// const mouse = createVector(mouseX, mouseY);
// acceleration = p5.Vector.sub(mouse, position);
// acceleration.normalize();
// acceleration.mult(0.5);

// velocity.add(acceleration);
// velocity.limit(10);
//     position.add(velocity);


// // noLoop();
// }


// OTHER TEST

let position;
let velocity;
let acceleration;

function setup() {
    createCanvas(innerWidth, innerHeight);
    // position = createVector(200, 200);
    // velocity = createVector(5, 8);
    background(255);
}

function draw() {
    // Draw function can be empty since we're only drawing on clicks
}

function mousePressed() {
    // Create explosion of multiple lines at click location
    let numLines = random(15, 25); // Random number of lines per click
    
    for (let i = 0; i < numLines; i++) {
        push();
        stroke(200, 100, random(255));
        strokeWeight(random(1, 8));
        
        // Create lines radiating outward from click point
        let angle = random(TWO_PI);
        let length = random(20, 80);
        let endX = mouseX + cos(angle) * length;
        let endY = mouseY + sin(angle) * length;
        
        line(mouseX, mouseY, endX, endY);
        pop();
    }
}
