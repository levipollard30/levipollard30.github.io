//Variables for ball
let ballX;
let ballY;
let ballSize;

//Variables for falling squares
let objectX = [];
let objectY = [];
let objectSize;
let objectSpeed = [];

//Variables for score and high score numbers
let score;
let highScore = 0;

//VAriables for lives
let lives = 3;

function setup() {
  createCanvas(400, 400);

  //Sets where the ball starts
  ballX = mouseX;
  ballY = 350;
  ballSize = 30;

  //Makes every squre 40 by 40
  objectSize = 40;
  //Starts score at 0
  score = 0;
  //My first loop makes the five falling squares and where they start and their speed it also makes them spawn at different y points so that they aren't all in one line
  for (let i = 0; i < 5; i++) {
    objectX[i] = random(0, width - objectSize);
    objectY[i] = random(-400, 0);
    objectSpeed[i] = 3;
  }
}

function draw() {
  background(0, 1, 200);
  //Only letsd you play if you have lives and lets you move ball with mouse
  if (lives > 0) {
    ballX = mouseX;
    ballY = mouseY;
    //Draws the ball
    circle(ballX, ballY, ballSize);
    //checks for the squares then draws them each frame at what pixels they are at. Once it knows where they are it draws the squares
    for (let i = 0; i < 5; i++) {
      objectY[i] = objectY[i] + objectSpeed[i];

      square(objectX[i], objectY[i], objectSize);
      //checks if the square reaches the bottom if it does it adds one point to the score and resets the square at the top. It resets it at a random x position at the top and adds a little speed everytime
      if (objectY[i] > 375) {
        score = score + 1;
        objectY[i] = 0;
        objectX[i] = random(0, width - objectSize);
        objectSpeed[i] = objectSpeed[i] + 0.2;
      }
      //checks if the middle of the ball is touching a square and if it is it takes away a life. Then it resets it at a random x position at top and resets the speed
      if (
        ballX > objectX[i] &&
        ballX < objectX[i] + objectSize &&
        ballY > objectY[i] &&
        ballY < objectY[i] + objectSize
      ) {
        lives -= 1;
        objectY[i] = 0;
        objectX[i] = random(0, width - objectSize);
        objectSpeed[i] = 3;
      }
      //Adds a score counter to top of screen
      textSize(15);
      text("Score: " + score, 10, 30);
      fill("black");

      if (score > highScore) {
        highScore = score;
      }
      //Adds highscore counter to top of screen
      text("High Score: " + highScore, 10, 60);
      //Adds number of lives counter to top of screen
      text("Lives: " + lives, 320, 30);
      //Checks if mouse is off the screen and if it is you lose all your lives
      if (mouseX > 399 || mouseX < 5 || mouseY > 399 || mouseY < 5) {
        lives = 0;
      }
    }
  }
  //If you have no lives then the words "Game Over" are displayed on middle of the screen. If you press the screen it resets your score at 0 and number of lives at 3
  if (lives <= 0) {
    textSize(35);
    text("Game Over", 115, 200);
    fill("red");
    if (mouseIsPressed) {
      lives = 3;
      score = 0;
      // Assistance from a classmate was used her because i did not know how to do this part. This resets all the squares at the start of the game and sets a new position
      for (let i = 0; i < 5; i++) {
        objectX[i] = random(0, width - objectSize);
        objectY[i] = random(-400, 0);
        objectSpeed[i] = 3;
      }
    }
  }
}
