// Plan: When clicking on buttons on dj table, the dancing humans from assignment 1 week 3 are moving (daning)

const Xsize = 20;
const Ysize = 80;
const gap = 15;
const Yamount = 4;
const Xamount = 18;
const ellipseSize = 20;

let synth;

let dance = false;
let danceTimer = 0;

window.addEventListener("load", () => {
  synth = new Tone.PolySynth().toDestination();
});

window.addEventListener("click", () => {
  Tone.start();
});


function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(3);
}

function draw() {
  background(255);

  push();
  fill(0);
  rect(width / 2 - 75, 85, 150, 85);
  pop();

  push();
  fill(255, 20, 147);
  ellipse(width / 2 - 35, 110, 25, 25);

  fill(0, 255, 255);
  ellipse(width / 2 - 35, 145, 25, 25);

  fill(255, 215, 0);
  ellipse(width / 2, 145, 25, 25);

  fill(138, 43, 226);
  ellipse(width / 2 + 35, 110, 25, 25);

  fill(50, 205, 50);
  ellipse(width / 2 + 35, 145, 25, 25);

  fill(255, 69, 0);
  ellipse(width / 2, 110, 25, 25);
  pop();
  
  noStroke();
  noFill();

  // // Code retreived from Claude https://claude.ai/public/artifacts/d840efde-4cd0-4492-8984-28ab1d25c7bc
  // if (dance) {
  //   danceTimer++;
  //   if (danceTimer >= danceDuration) {
  //     dance = false;
  //     danceTimer = 0;
  //   }
  // }

let y = (height - Ysize * Yamount - gap * (Yamount - 1)) / 2;


for (let i=0; i < Yamount; i++) {
  let x = (width - Xsize * Xamount - gap * (Xamount - 1)) / 2;

  for (let k=0; k < Xamount; k++) {
    push();
    translate(x, y);

  stroke(74, 125, 65);
  strokeWeight(1);


          ellipse(10, 0, ellipseSize);


      beginShape();
      for (let s = 0; s < 12; s++) {

        if (dance) {

          vertex(random(0, Xsize), random(0, Ysize));
        } else {
          vertex(Xsize / 2, Ysize / 2);
        }

      }
      endShape();
      
  pop(); 

  x += Xsize + gap;
}
y += Ysize + gap;
}
}


function mousePressed() {
  let note = null;

  if (dist(mouseX, mouseY, width / 2 - 35, 110) < 12.5) {
    note = "C4";
  } 
  else if (dist(mouseX, mouseY, width / 2 - 35, 145) < 12.5) {
    note = "F4";
  }
  else if (dist(mouseX, mouseY, width / 2, 145) < 12.5) {
    note = "G4"; 
  }
  else if (dist(mouseX, mouseY, width / 2 + 35, 110) < 12.5) {
    note = "E4";
  }
  else if (dist(mouseX, mouseY, width / 2 + 35, 145) < 12.5) {
    note = "A4";
  }
  else if (dist(mouseX, mouseY, width / 2, 110) < 12.5) {
    note = "D4";
  }

  if (note) {
    synth.triggerAttackRelease(note, "4n");
    
    dance = true;

    if (danceTimer) {
      clearTimeout(danceTimer);
    }

    danceTimer = setTimeout(() => {
      dance = false;
    }, 1000);
  }
}
