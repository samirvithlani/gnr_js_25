console.log("file loaded")

const callAfter3 = ()=>{
    console.log("function called after 3 sec..")
}

//callAfter3()
setTimeout(()=>{
    //callAfter3()
},3000) //mill seconds

// setInterval(() => {
//     console.log("function called...")
// }, 1000);

//clear
// var count =1;
// var id = setInterval(()=>{
//     console.log("count....",count)
//     count++
//     //clearInterval(id)
//     if(count>5){
//         clearInterval(id)
//     }

// },1000)


var count =1;
var id = setInterval(()=>{
    
    console.log("count =",count)
    count++
    setTimeout(()=>{
        clearInterval(id)
    },4000)
},1000)