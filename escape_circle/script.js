const startBtn = document.getElementById("start-btn");
const circle = document.getElementById("circle")
// let mode = "Stopped";
let screenWidth = window.innerWidth;


function startGame(){

    // startBtn.innerText = "Start" ?  startBtn.innerText = "Reset" : startBtn.innerText = "Start" ;

    startBtn.innerText = startBtn.innerText === "Start" ? "Reset" : "Start"

    circle.classList.toggle("start-animation");
    circle.classList.toggle("circle-hover");
    // console.log(mode);

    
// let ballRect = ball.getBoundingClientRect()


    // mode = !mode
    // startBtn.innerText = 10
    // console.log('H');
    // circlePosition = circle.offsetLeft;
    // while(circlePosition <= width) {
    //     setTimeout((console.log(circlePosition)), 1000)
        
    // }

    // if(startBtn.innerText = "Reset"){
        // first get the value of place of circle when hover using setInterval and circle.offsetLeft
        // then we can find when it will touch the left part and make the wall glow green when touched.
    // }
    

}


startBtn.addEventListener("click", startGame)

function hitWall(){

}



animatedElement.addEventListener('animationstart', (event) => {
    console.log('Animation started:', event);
  });

  
  animatedElement.addEventListener('animationend', (event) => {
    console.log('Animation ended:', event);
  });

  
  animatedElement.addEventListener('animationiteration', (event) => {
    console.log('Animation iteration:', event);
});
