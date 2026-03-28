const payment1 =()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("payment 1 done...")
        }, 3000);
    })

    return promise
}
const payment2 =()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve("payment 2 done...")
            reject("paymnet 2 fail..")
        }, 3000);
    })
    return promise
}

const paynow = async()=>{

    try{
    const[pay1,pay2] =await Promise.all([payment1(),payment2()])
    console.log("paymanet done.....",pay1,pay2)
    }catch(err){
        console.log("payment rejected",err)
    }
    

}

paynow()