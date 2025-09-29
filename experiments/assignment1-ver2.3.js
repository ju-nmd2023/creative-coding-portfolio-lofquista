function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    frameRate(1);
}

const totalArcs = 20;
const gap = 40;

function draw() {
  fill(random(255), random(65), 150);

  for (let i = 0; i < totalArcs; i++) {
    noStroke();

    // The next two lines are retrieved from ChatGPT
    let y = height / 2 + (i - totalArcs/2) * gap + random(-50, 100); 
    let arcWidth = 100 - Math.abs(i - totalArcs/2) / (totalArcs/2) * 550 + random(-50, 20);
    
    push();
    translate(width/2, y);
    rotate(frameCount * 0.1);
    translate(-width/2, -y);
    
    arc(width/2, y, arcWidth, 20, 5, PI + HALF_PI);
    
    pop();
  } 
}