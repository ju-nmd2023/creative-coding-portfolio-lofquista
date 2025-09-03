function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
}

let x = width / 2;
let y = height / 4;

function draw() {
    stroke(0);
    strokeWeight(8);
    noFill();


   for (let i = 0; i < 20; i++) {
        stroke(255 * Math.random(), 0, 0);
        strokeWeight(20 * Math.random());
    let y = height / 4 + i * 20; 
    arc(x, y, 350 * Math.random(), 30, 0, PI + HALF_PI);
  }
      noLoop();
    }
