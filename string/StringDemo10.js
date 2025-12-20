var data = "java"
// var flag = data.includes("a")
// console.log(flag)

var flag= false

for(let i=0;i<data.length;i++){
    if(data[i]=="p"){
        flag=true
        break
    }
}
console.log(flag)
