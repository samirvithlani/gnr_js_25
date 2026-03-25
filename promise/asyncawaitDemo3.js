//const foodItem = ["pizza","panipuri","cha"]
const searchFood = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve([{name:"pizza",price:200},{name:"garlic bread",price:180}])
        }, 3000);
    })
    return promise
}

const addToCart = (food)=>{
    const promise = new Promise((resolve,rejct)=>{
        setTimeout(() => {
            resolve({message:"item added to cart",food:food})
        }, 1000);
    })
    return promise
}
const payment = (price)=>{

     const promise = new Promise((resolve,rejct)=>{
        setTimeout(() => {
            resolve({amount:price,status:"SUCCESS",id:Math.floor(Math.random()*100000)})
        }, 4000);
    })
    return promise
}



const swiggy = async()=>{
    console.log("swiggy opened...")
    console.log("food searching...")
    var food = await searchFood() //promise
    console.log(food) //either resolve or reject data
    console.log("item is adding to cart")
    const cart = await addToCart(food)
    console.log(cart)
    console.log("item is added..")
    console.log("payment is processing...")
    
    var total = cart.food.reduce((prev,next)=>prev+next.price,0)
    //console.log(total)
    //const receipt = await payment(cart.food.price)
    const receipt = await payment(total)
    console.log(receipt)
    console.log("payment done..")
    
}
swiggy()