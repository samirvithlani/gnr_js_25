var foodList = ["pizza","burger","panipuri","samosa"]


const searchFood = (foodName)=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            var foundFood = foodList.includes(foodName)
            if(foundFood){
                resolve({message:"item found",item:foodName})
            }
            else{
                reject({message:"item not found.."}) //catch...
            }
        }, 3000);
    })
    return promise
}
const zomato = async()=>{

    console.log("searching food..")
    try{
        const food = await searchFood("pizzaaa")
        console.log("item found..",food)
    }catch(err){
        console.log("item not found..")
        console.log(err)
    }


}
zomato()


