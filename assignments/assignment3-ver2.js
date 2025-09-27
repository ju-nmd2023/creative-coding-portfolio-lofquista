// Plan: when the mouse reaches a certain area of the canvas it plays a certain note

let startPoint;
let position;
let velocity;
let acceleration;
let startLines = false;
let synth;
let lastNote = null;

window.addEventListener("load", () => {
synth = new Tone.AMSynth().toDestination();
});

window.addEventListener("click", () => {
  Tone.start();
});

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    frameRate(30);
}


function drawLines() {
    push();
    stroke(255, 255, 255);
    strokeWeight(1);
    line(startPoint.x, startPoint.y, position.x, position.y);
    pop();
}

function playTones() {
    const musicZone = height / 9;
    let currentMusicZone = Math.floor(mouseY / musicZone);

    const notes = ["C4", "Eb4", "F4", "Gb4", "G4", "Bb4", "C5", "Eb5"];
    const currentNote = notes[Math.min(currentMusicZone, notes.length - 1)];


    if (currentNote !== lastNote) {

        if (lastNote !== null) {
            synth.triggerRelease();
        }

        synth.triggerAttack(currentNote);
        lastNote = currentNote;
    }
}


function draw() {
if (startLines) {
    drawLines();
    
    const mouse = createVector(mouseX, mouseY);
    acceleration = p5.Vector.sub(mouse, position);
    acceleration.normalize();
    acceleration.mult(0.5);
    
    velocity.add(acceleration);
    velocity.limit(10);
        position.add(velocity);

        playTones();
}
}

function mouseClicked() {
    startLines = !startLines;

    startPoint = createVector(mouseX, mouseY);
    position = createVector(mouseX, mouseY);
    velocity = createVector(5, 8);

    lastNote = null;

    if (!startLines) {
        synth.triggerRelease();
    }
    
}