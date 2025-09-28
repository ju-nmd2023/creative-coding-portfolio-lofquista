const size = 30;
const gap = 5;
const Yamount = 12;
const Xamount = 12;


function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(3);
}

function draw() {
  background(100, 200, 239);
  noStroke();
  noFill();

let y = (height - size * Yamount - gap * (Yamount - 1)) / 2;


for (let i=0; i < Yamount; i++) {
  let x = (width - size * Xamount - gap * (Xamount - 1)) / 2;

  for (let k=0; k < Xamount; k++) {
    push();
    translate(x, y);

    stroke(225 * Math.random(), 0, 125);

  strokeWeight(1.2);


      beginShape();
      for (let s = 0; s < 45; s++) {
        vertex(random(0, size), random(0, size));
      }
      endShape();
      
  pop(); 

  x += size + gap;
}
y += size + gap;
}
}