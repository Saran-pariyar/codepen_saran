const startBtn = document.getElementById("start-btn");
const circle = document.getElementById("circle")
// let mode = "Stopped";
let width = window.innerWidth;


function startGame(){


    circle.classList.toggle("start-animation");
    // circle.classList.toggle("circle-hover");
    // console.log(mode);

    
    
    // mode = !mode
    // startBtn.innerText = 10
    // console.log('H');
    // circlePosition = circle.offsetLeft;
    // while(circlePosition <= width) {
    //     setTimeout((console.log(circlePosition)), 1000)
        
    // }
    if(startBtn.innerText = "Reset"){
        // first get the value of place of circle when hover using setInterval and circle.offsetLeft
        // then we can find when it will touch the left part and make the wall glow green when touched.
    }
    

}


startBtn.addEventListener("click",startGame)

function hitWall(){

}