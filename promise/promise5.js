const paynow=()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({message:"payment done..",amount:1000})
        }, 4000);
    })
}
console.log("moving to payment gateway.")
var x = paynow()
console.log(x)
x.then((data)=>{
    console.log(data)
})