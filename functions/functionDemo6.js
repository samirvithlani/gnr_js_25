
const calling =()=>{
    console.log("calling function called...")
}

const test = (x)=>{
    console.log("test called...")
    console.log(x)
    x() // calling function call...
}

//test(100)
test(calling)