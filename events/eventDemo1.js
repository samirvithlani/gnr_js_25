const test=()=>{
    //alert("function callled....")
    var text = document.getElementById("txt")  //<h1>
    //console.log(text) //<h>
    //console.log(text.innerText) //<h1>.....innerText
    text.innerText = "HI"
    
}

const getBox=()=>{
    //alert("box...")
    const box = document.getElementById("box") //<div>
    box.style.backgroundColor="red"
}

const changeLink =()=>{
    
    const link = document.getElementById("link")
    link.href ="https://www.netflix.com"
    link.innerText="Netflix"
}