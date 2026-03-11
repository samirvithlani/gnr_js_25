const generateTag =()=>{
    //root...'
    const root = document.getElementById("root") //<div>
    const tag1 = document.createElement("h1")//<h1>
    const tag2 = document.createElement("p")
    tag1.innerHTML="HELLO I AM DYNAMIC H1"
    tag2.innerHTML = "hi i am p tag"
    tag2.style.color="red"

    root.appendChild(tag1)
    root.appendChild(tag2)
}
var data = [10,20,30,40,505,60,707,0,28,202,90]
const generateTag2 =()=>{
    //root...'
    const root = document.getElementById("root") //<div>
    for(let i=0;i<data.length;i++){
        const tag = document.createElement('h2')
        tag.innerHTML = data[i]
        root.appendChild(tag)
    }
    
}