const startBtn = document.getElementById("start-btn");
const circle = document.getElementById("circle")
let mode = false;

startBtn.addEventListener("click", ()=>{
    mode = !mode
    circle.classList.toggle("start-animation");
    circle.classList.toggle("circle-hover");
    

    // !mode ? startBtn.innerText("St") : startBtn.innerText("Stop")
    mode ? startBtn.innerText = "Reset" : startBtn.innerText = "Start"
    // mode = !mode
    // startBtn.innerText = 10
    // console.log('H');
    

})