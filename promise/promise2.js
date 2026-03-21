console.log("opening zomato..")

const promise = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("i have selected pizza order it...")
    }, 4000);
})
console.log(promise) //pening..

promise.then((data)=>{
    console.log("order food for ")
    console.log(data)
})
