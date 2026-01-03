function add(a, b) {
  console.log(a + b);
}

add(100,200)

//arrow function.
const add1 = (x,y)=>{
    console.log(x+y)
}
add1(90,10)


function test(x){
     return x **2
}
var ans = test(2)
console.log("ans = ",ans)

const getSq = (x)=>{
    return x**2
}


var ans1 = getSq(3)
console.log(ans1)

//convert getSq function in single line
//in single line dont use {}
//if no {} no return keyword it will return by default...
const getCube = (x)=>x**3
var cube = getCube(3)
console.log("cube",cube)



//if function is returing anythin we can directly call in console.log it will print returned value..
const getFullName = (fname,lname)=>fname + " "+ lname

console.log(getFullName("virat","kohli"))

var fullName = getFullName("ms","dhoni")
console.log(fullName)
