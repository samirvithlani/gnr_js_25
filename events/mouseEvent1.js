//random no generate..

const random = Math.floor(Math.random()*1000) // 0 -->1000
console.log("random no",random)
const changeColor=()=>{
    const box = document.getElementById("box") //<div>
    //console.log(box)
    //alert("mouse entered..")
    box.style.backgroundColor="blue"
}
const changeColor2=()=>{
    const box = document.getElementById("box") //<div>
    box.style.backgroundColor="pink"
}

//box center random no print