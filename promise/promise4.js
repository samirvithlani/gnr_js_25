// function demo(){
    //var no1 =100
//     return no1
       //return 100
// }

// var x = demo()
// console.log(x)


const searchFood = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve(["pizza","pasta","breads"])
        }, 3000);
    })

    return promise
    
}
var x = searchFood() //x == promise object
console.log(x)

x.then((data)=>{
    console.log(data)
})