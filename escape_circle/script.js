const startBtn = document.getElementById("start-btn");
const circle = document.getElementById("circle");
let screenWidth = window.innerWidth;
let scoreElement = document.getElementById("score-count")
let playerScore = 0;

function getCirclePosition() {
  let circleRect = circle.getBoundingClientRect();
  let rightEdge = circleRect.right;

  if (rightEdge >= screenWidth) {
    clearInterval(circleInterval);
    // circle.style.cssText = "top:0; left:0;"
    circle.style.left="0"
    circle.style.top="0"

    alert("Level 1 Completed!");
    playerScore++
    scoreElement.innerText = playerScore
  }
}

let circleInterval;

function startGame() {
  startBtn.innerText = startBtn.innerText === "Start" ? "Reset" : "Start";

  circle.classList.toggle("start-animation");
  circle.classList.toggle("circle-hover");

  if (startBtn.innerText === "Reset") {
    circleInterval = setInterval(getCirclePosition, 100);
    
  } else {
    clearInterval(circleInterval);
    
  }
}

startBtn.addEventListener("click", startGame);

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
});
