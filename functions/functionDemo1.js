function demo(){
    console.log("demo function called...")
}

demo() //calling part..

//without return type with arg
function greet(name){
    console.log("Hello ",name);
    
}
//greet("Virat")
greet() // clang error... in js function will call anyhow but valu will be undefined...


function add(a,b,c){
    console.log(a+b+c)
}
add(10,20,30)
add(10,20) //10,20,unde.. Nan arror..
add("amit","sumit","raj")