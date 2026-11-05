let racerXs = [30, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;

function setup() {
  createCanvas(600, 250);
}

function draw() {
  background(240);
  line(finishX, 0, finishX, height);

  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;

    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }

    if (racerXs[0] > 300) {
      fill("red");
    } else {
      fill("black");
    }

    circle(racerXs[i], y, 24);
  }
}

function mousePressed() {
  if (keyIsDown(SHIFT)) {
    racerXs.pop();
  } else {
    racerXs.push(30);
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    racerXs[0] = 30;
  }
}