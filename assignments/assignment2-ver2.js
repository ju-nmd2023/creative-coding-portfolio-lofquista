class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const a = Math.random() * Math.PI * 2;
    const v = 0.8 + Math.random();
    this.velocity = createVector(Math.cos(a) * v, Math.sin(a) * v);
    this.lifespan = 200 + Math.random() * 200;

    // The next line was retreived from Claude
    this.angle = a;


      this.length = 50 + random(200); // Random length 30-80
    this.width1 = random(-20, 5); // Random width on one side
    this.width2 = random(2, 55); 
  }

  update() {
    // this.lifespan--;

    this.velocity.mult(0.99);
    this.position.add(this.velocity);
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);

    // The next line was retreived from Claude
     rotate(this.angle);
    noStroke();
    fill(0, random(25), random(255));
    strokeWeight(random(50));
    triangle(0, this.width1, 0, this.width2, this.length, 0);

    pop();
  }

}

function setup() {
  createCanvas(innerWidth, innerHeight);
//   blendMode(SUBTRACT);
frameRate(3);
}

function generateParticles(x, y) {
  for (let i = 0; i < 100; i++) {
    const px = x + random(-10, 10);
    const py = y + random(-10, 10);
    const particle = new Particle(px, py);
    particles.push(particle);
  }
}

let particles = [];

function draw() {
  background(0);

  for (let particle of particles) {
    particle.update();
    particle.draw();

  }

}

function mouseClicked() {
  generateParticles(mouseX, mouseY);
}