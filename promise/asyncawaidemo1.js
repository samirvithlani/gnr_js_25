const payment = ()=>{
    console.log("paynow called....")
    const promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve({amount:1000,id:101,status:"success"})
            //reject({amount:1000,id:101,status:"fail"})
        }, 3000);
    })
    return promise
}

const paynow = async()=>{

    // var x = payment()
    // console.log(x)
    // x.then((data)=>{
    //     console.log(data)
    // })

    //if any function is returing promise then we can put await keyword to wait for resolve or rejct 
    //replcament of then catch
    console.log("payment has been initiated..")
    var x = await payment()
    console.log(x)
    console.log("here")

}
paynow()