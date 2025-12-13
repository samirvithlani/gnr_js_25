var data = "aMiT"
var upperData = ""
var x = data.charCodeAt(0)
console.log(x)
console.log(x-32)
console.log(String.fromCharCode(x-32))
console.log("-------------------------------")
// for(let i=0;i<data.length;i++){

//     console.log("char",data[i])
//     console.log("ascii",data.charCodeAt(i))
//     console.log("char",String.fromCharCode(data.charCodeAt(i)-32))
// }


// for(let i=0;i<data.length;i++){

//     upperData = upperData + String.fromCharCode(data.charCodeAt(i)-32)
    
// }

for(let i=0;i<data.length;i++){

    
    if(data.charCodeAt(i)>=97 && data.charCodeAt(i)<=122)
    {
        upperData = upperData + String.fromCharCode(data.charCodeAt(i)-32)
    }
    else{
        upperData = upperData + data[i]
    }
    
}
console.log(upperData)