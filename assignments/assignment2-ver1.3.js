// let position;
// let velocity;
// let acceleration;
// let colors = [
//     [137, 207, 240],
//     [255, 182, 193],
//     [25, 25, 62]
// ];

// function setup() {
//     createCanvas(innerWidth, innerHeight);
//     position = createVector(width / 2, height / 2);
//         velocity = createVector(5, 8);
//         background(0);
// frameRate(40);

// }

// function draw() {
//     push();
//     stroke(random(colors));
//     strokeWeight(20);
// line(width / 2, height / 2, position.x, position.y);
//     pop();



// const mouse = createVector(mouseX, mouseY);
// acceleration = p5.Vector.sub(mouse, position);
// acceleration.normalize();
// acceleration.mult(0.8);

// velocity.add(acceleration);
// velocity.limit(10);
//     position.add(velocity);
// }

// function mouseClicked() {
//     push();
//     strokeWeight(random(200));
//     pop();
// }


// NEW

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const a = Math.random() * Math.PI * 2;
    const v = 0.2 + Math.random();
    this.velocity = createVector(Math.cos(a) * v, Math.sin(a) * v);
    this.size = 2;
  }

  update() {
    this.velocity.mult(1.1);
    this.position.add(this.velocity);

 
    if (this.position.x <= 0 || this.position.x >= width) {
      this.velocity.x *= -1;
this.size += 1;
      // Constrain function learned from p5.js https://p5js.org/reference/p5/constrain/
      this.position.x = constrain(this.position.x, 0, width);
    }
    if (this.position.y <= 0 || this.position.y >= height) {
      this.velocity.y *= -1;
      this.size += 1;
      this.position.y = constrain(this.position.y, 0, height);

    }

  }

  draw() {

    push();
    translate(this.position.x, this.position.y);

    noFill();
    stroke(random(255), random(255), random(255));
    ellipse(0, 0, this.size, this.size);

    pop();
  }

}

function setup() {
  createCanvas(innerWidth, innerHeight);
frameRate(10);
background(255);

}


function generateParticles(x, y) {
    for (let i = 0; i < 5; i++) {
        const px = x + random(-10, 10);
        const py = y + random(-10, 10);
        const particle = new Particle(px, py);
        particles.push(particle);
    }
}

let particles = [];
let hasClicked = false;

function draw() {
    background(255, 40);
    
    if (!hasClicked) {
        push();
        fill(0);
        textSize(25);
        text("Click", width / 2, height / 2);
        textAlign(CENTER);
        pop();
    }
    
  for (let particle of particles) {
    particle.update();
    particle.draw();
  }

}

function mouseClicked() {
    generateParticles(mouseX, mouseY);
    hasClicked = true;
}