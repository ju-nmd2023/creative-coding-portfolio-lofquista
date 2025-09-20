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
    const force = getFlowForce(this.position.x, this.position.y);
    this.velocity.add(force);
    
    this.velocity.mult(1.1);
    this.position.add(this.velocity);
    
 
    if (this.position.x <= 0 || this.position.x >= width) {
      this.velocity.x *= -1;
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
    fill(random(150), random(55), random(255));
    triangle(0, this.width1, 0, this.width2, this.length, 0);

    pop();
  }

}

function getFlowForce(x, y) {
    const scale = 0.01;
    const strength = 0.1;
    const angle = noise(x * scale, y * scale) * TWO_PI * 2;
    return createVector(cos(angle) * strength, sin(angle) * strength);
}

function setup() {
  createCanvas(innerWidth, innerHeight);
frameRate(10);

for (let i = 0; i < 50; i++) {
    const x = random(width);
    const y = random(height);
    particles.push(new Particle(x, y));
  }
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


function draw() {
 fill(0, 20);
 noStroke();
rect(0, 0, width, height);


  for (let particle of particles) {
    particle.update();
    particle.draw();
  }
}

// function mouseClicked() {
//     background(0);
// }
