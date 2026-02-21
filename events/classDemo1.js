//only even will blue else red : hw
const getBoxes =()=>{
    const boxes  = document.getElementsByClassName("box") //<div><div> []
    console.log(boxes) //
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.background="red"
        //boxes[i].innerHTML = i+1
        //boxes[i].innerHTML="<h1>"+(i+1)+"</h1>"
        boxes[i].innerHTML = `<h1>${i+1}</h1>`

    }
    
}