const fastPayment = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("pay via phonepe done..")
        }, 5000);
    })

    return promise
}
const slowPayment = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("pay via paytm done..")
        }, 4000);
    })

    return promise
}

const paynow = async()=>{

    console.log("paynow..")
    const result = await Promise.race([fastPayment(),slowPayment()])
    console.log(result)
}
paynow()