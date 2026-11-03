let racerXs = [30, 30, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;

racerXs[0];


function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}

function draw() {
  background(240);

 
  fill(200, 200, 255);
  rect(200, 0, 100, height);

  line(finishX, 0, finishX, height);

  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;

    if (racerXs[i] < finishX) {

      
      if (racerXs[i] > 200 && racerXs[i] < 300) {
        racerXs[i] += random(0.2, 1);
      } else {
        racerXs[i] += random(1, 3);
      }

    }

    circle(racerXs[i], y, 24);
  }
}