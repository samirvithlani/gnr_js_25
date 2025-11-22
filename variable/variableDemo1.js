//var : global scope
//let : block scope
//const : block scope

var a = 100 //global scope
console.log("value of a outside of block",a)

{
    //block..
    console.log("value of a inside of block",a)
    var c = 55;
    console.log("value of c inside of block",c)
}

console.log("value of c outside of block",c)