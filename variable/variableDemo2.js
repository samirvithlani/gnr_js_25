let x = 100
console.log("value of x outside of block",x)

{
    console.log("value of x inside of block",x)
    let p = 22 // block scope
    console.log("value of p inside block ",p)
}

console.log("value of p outside block ",p)