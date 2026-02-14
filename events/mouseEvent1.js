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

const changeColor3 =()=>{
    const  box2 = document.getElementById("box2") //<div>
    box2.className ="box2" //css class if present it will applied if not no error...


}