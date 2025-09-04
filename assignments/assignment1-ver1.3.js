const Xsize = 20;
const Ysize = 80;
const gap = 15;
const Yamount = 4;
const Xamount = 18;
const ellipseSize = 20;


function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255);
  noStroke();
  noFill();

let y = (height - Ysize * Yamount - gap * (Yamount - 1)) / 2;


for (let i=0; i < Yamount; i++) {
  let x = (width - Xsize * Xamount - gap * (Xamount - 1)) / 2;

  for (let k=0; k < Xamount; k++) {
    push();
    translate(x, y);

  stroke(74, 125, 65);
  strokeWeight(1);


      beginShape();
      for (let s = 0; s < 12; s++) {
        vertex(random(0, Xsize), random(0, Ysize));
        ellipse(4, 0, ellipseSize);
      }
      endShape();
      
  pop(); 

  x += Xsize + gap;
}
y += Ysize + gap;
}
noLoop();
}
