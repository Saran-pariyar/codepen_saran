const startBtn = document.getElementById("start-btn");
const circle = document.getElementById("circle");
let screenWidth = window.innerWidth;

function getCirclePosition() {
  let circleRect = circle.getBoundingClientRect();
  let rightEdge = circleRect.right;

  if (rightEdge >= screenWidth) {
    clearInterval(circleInterval);
    alert("Level 1 Completed!");
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
