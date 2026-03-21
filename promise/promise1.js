console.log("line 1")

//resolve --> function 
//reject --> function
const promise = new Promise((resolve,reject)=>{

    //resolve("promise has been resolved..")
    setTimeout(() => {
        resolve("promise has been resolved..")
    }, 2000);
})
console.log(promise)
//whenever promise gets resolve it will go to find then block...
promise.then((data)=>{
    console.log(data)
})
console.log("line end...")