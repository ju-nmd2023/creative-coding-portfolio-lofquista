function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
}

const totalArcs = 12;
const gap = 25;


function draw() {
    noFill();

push();
translate(width / 2, height / 2);
rotate(10);
translate(-width / 2, -height / 2);

   for (let i = 0; i < totalArcs; i++) {
        stroke(25, 255 * Math.random(), 0);
        strokeWeight(30 * Math.random());

        //The next two lines are retreived from ChatGPT https://chatgpt.com/share/68b8728a-8948-8002-953f-2e164ed9e63d and https://chatgpt.com/share/68b88335-49e8-8002-9218-8d4ef47d2c53
    let y = height / 2 + (i - totalArcs/2) * gap + random(-100, 50); 
   let arcWidth = 550 - Math.abs(i - totalArcs/2) / (totalArcs/2) * 650 + random(-20, 50);
    arc(width/2, y, arcWidth, 50, 5, PI + HALF_PI);
  }
  pop();
  push();
translate(width / 2, height / 2);
rotate(10);
translate(-width / 2, -height / 2);

   for (let i = 0; i < totalArcs; i++) {
        stroke(255 * Math.random(), 255 , 255);
       strokeWeight(5 * Math.random());

        //The next two lines are retreived from ChatGPT https://chatgpt.com/share/68b8728a-8948-8002-953f-2e164ed9e63d and https://chatgpt.com/share/68b88335-49e8-8002-9218-8d4ef47d2c53
    let y = height / 2 + (i - totalArcs/2) * gap + random(-50, 100); 
   let arcWidth = 450 - Math.abs(i - totalArcs/2) / (totalArcs/2) * 350 + random(-50, 20);
    arc(width/2, y, arcWidth, 50, 6, PI + HALF_PI);
  }
  pop();
  
      noLoop();
    }
