var data  =[1,2,3,4,5]
const generateNumber = ()=>{
    
    const root = document.getElementById("root")
    root.innerHTML=""
    for(let i=0;i<data.length;i++){
        var tag = document.createElement("h2")
        tag.innerHTML = data[i]
        root.appendChild(tag)
    }
}

const  pushNumber=()=>{
    var randomNo = Math.floor(Math.random()*10)
    data.push(randomNo)
    console.log(data)
    generateNumber()

}