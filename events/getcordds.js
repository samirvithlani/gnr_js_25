const getData = (event)=>{
    console.log(event)
    console.log(event.clientX)
    console.log(event.clientY)
}

const ball = document.querySelector("#ball");

document.addEventListener("mousemove", function(event) {

  let x = event.clientX;
  let y = event.clientY;

  ball.style.left = x + "px";
  ball.style.top = y + "px";
});