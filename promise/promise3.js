console.log("opening zomato")

const promise = new Promise((resolve,reject)=>{

    setTimeout(() => {
            resolve({name:"pizza",price:200})
    }, 3000);
})
console.log(promise)
promise.then((data)=>{
    console.log(`order ${data.name} and pay ${data.price}`)
})