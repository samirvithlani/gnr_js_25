const searchItem = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({product:"iphone",price:1200})
        }, 3000);
    })
}
//item -->{}
const payNow = (item)=>{
    console.log("opening paymentgatway dont refresh page...")
//{product:"iphone",price:1200}
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({message:"payment done",price:item.price})
        }, 4000);
    })
}

const amazone=()=>{
    console.log("opening amazone")
    console.log("searching item")
    var itemprom = searchItem()
    itemprom.then((Founditem)=>{
        console.log("search item done added to cart..")
        console.log("search item..",Founditem)//{product:"iphone",price:1200}
        const payment = payNow(Founditem)//{product:"iphone",price:1200}
        payment.then((paymentData)=>{
            console.log(paymentData)
        })
        
    })
}
amazone()