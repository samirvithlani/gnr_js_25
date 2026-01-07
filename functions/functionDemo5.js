const test = ()=>{
    console.log("test function called...")
    return "100"
}

// var ans = test() //100
// console.log("ans..",ans)

var ans = test //address transfer
console.log("ans = ",ans)
var x = ans() // test function call...???
console.log("x",x)

//if you want to call a function --> syntax --> funName()


const add=(a,b)=>{
    console.log("add function called...")
    return a+ b
}

var y = add // add function proptotype -->y y ==add()
var sum = y(10,20) // as add function is expectin 2 param and we are calling add function using y then we have to [ass in y()]
console.log("sum = ",sum)
