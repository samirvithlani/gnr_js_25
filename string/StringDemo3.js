var data ="naman"
// var copyData = data
// console.log(copyData)

var copyData =""
//copy single single Char
// for(let i=0;i<data.length;i++){

//     // "" = ""+r =r
//     //r = "r"+o = ro
//     copyData = copyData + data[i]
// }
// console.log(copyData)


//rev
var revData =""
//royal - 5
for(let i=data.length-1;i>=0;i--){
    revData = revData + data[i]
}
console.log(revData)

//check string is palindrome or not

if(revData == data){
    console.log("string is palindrome...")
}
else{
    console.log("string is not palindrome")
}