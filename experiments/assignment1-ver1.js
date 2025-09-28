const size = 30;
const gap = 5;
const Yamount = 19;
const Xamount = 14;

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255);
  noStroke();
  noFill();

let y = (height - size * Yamount - gap * (Yamount - 1)) / 2;


for (let i=0; i < Yamount; i++) {
  let x = (width - size * Xamount - gap * (Xamount - 1)) / 2;

  for (let k=0; k < Xamount; k++) {
    push();
    translate(x, y);

  stroke(0);
  strokeWeight(1.2);

  // The next line was retreived from https://p5js.org/reference/p5/strokeJoin/
      strokeJoin(ROUND);


      beginShape();
      for (let s = 0; s < 10; s++) {
        vertex(random(0, size), random(0, size));
      }
      endShape();
      
  pop(); 

  x += size + gap;
}
y += size + gap;
}
noLoop();
}
