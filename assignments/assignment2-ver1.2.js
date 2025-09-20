class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const a = Math.random() * Math.PI * 2;
    const v = 0.8 + Math.random();
    this.velocity = createVector(Math.cos(a) * v, Math.sin(a) * v);

    // The next line of code was retreived from Claude https://claude.ai/share/73b53e1c-bf6e-46ff-8b67-155017b48720
    this.angle = Math.atan2(this.velocity.y, this.velocity.x);

  
  }

update() {
    const force = flowForce(this.position.x, this.position.y);
    this.velocity.add(force);
    
    this.velocity.mult(1.02);
    this.position.add(this.velocity);

    // The next line of code was retreived from Claude https://claude.ai/share/73b53e1c-bf6e-46ff-8b67-155017b48720
    this.angle = Math.atan2(this.velocity.y, this.velocity.x);
    
 
    if (this.position.x <= 0 || this.position.x >= width) {
      this.velocity.x *= -1;

      // Constrain function learned from p5.js https://p5js.org/reference/p5/constrain/
      this.position.x = constrain(this.position.x, 0, width);

    }
    if (this.position.y <= 0 || this.position.y >= height) {
      this.velocity.y *= -1;
      this.position.y = constrain(this.position.y, 0, height);

    }
  }


  draw() {
    push();
    translate(this.position.x, this.position.y);

// The next line was inspired by ChatGPT https://chatgpt.com/share/68c98d11-bb7c-8002-a0bc-de6c9eb88d87
 rotate(this.angle);

    noStroke();
    fill(random(216), random(191), random(216));
    triangle(10, 0, -10, -5, -10, 5);

    pop();
  }

}

function flowForce(x, y) {
    const scale = 0.1;
    const strength = 1;
    const angle = noise(x * scale, y * scale) * TWO_PI;
    return createVector(cos(angle) * strength, sin(angle) * strength);
}

function setup() {
  createCanvas(innerWidth, innerHeight);
frameRate(10);
background(0);

for (let i = 0; i < 20; i++) {
    const x = random(width);
    const y = random(height);
    particles.push(new Particle(x, y));
  }
}


function generateParticles(x, y) {
    for (let i = 0; i < 10; i++) {
        const px = x + random(-10, 10);
        const py = y + random(-10, 10);
        const particle = new Particle(px, py);
        particles.push(particle);
    }
}

let particles = [];


function draw() {
  for (let particle of particles) {
    particle.update();
    particle.draw();
  }
}