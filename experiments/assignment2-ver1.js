class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const a = Math.random() * Math.PI * 2;
    const v = 0.2 + Math.random();
    this.velocity = createVector(Math.cos(a) * v, Math.sin(a) * v);

// The next line was inspired by ChatGPT https://chatgpt.com/share/68c98d11-bb7c-8002-a0bc-de6c9eb88d87
    this.angle = a;

      this.length = 20 + random(200); 
    this.width1 = random(-40, 40); 
    this.width2 = random(10, 100); 
  }

  update() {
    this.velocity.mult(1.1);
    this.position.add(this.velocity);
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);

// The next line was inspired by ChatGPT https://chatgpt.com/share/68c98d11-bb7c-8002-a0bc-de6c9eb88d87
 rotate(this.angle);

    noStroke();
    fill(random(255), random(255), random(0));
    triangle(0, this.width1, 0, this.width2, this.length, 0);

    pop();
  }

}

function setup() {
  createCanvas(innerWidth, innerHeight);
frameRate(10);
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

// The flowingParticles part was inspired by ChatGPT https://chatgpt.com/share/68c98847-a08c-8002-95f5-7b56b222b744
let flowingParticles = false;

function draw() {
  background(0);

  if (flowingParticles) {
    generateParticles(mouseX, mouseY);
  } 
  else {
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Click to start and stop", width / 2, height / 2);
  }

  for (let particle of particles) {
    particle.update();
    particle.draw();
  }
}

function mouseClicked() {
    flowingParticles = !flowingParticles;
}