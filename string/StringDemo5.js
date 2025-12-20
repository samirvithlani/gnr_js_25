//1st task

var data = "hi this is new india"
var count =0
for(let i=0;i<data.length;i++){
    let c = data[i]
    // if(data[i]=="a" || data[i]=="e" || data[i]=="i" || data[i]=="o" || data[i]=="u" )
    // {
    //     count++;
    // }
    if(c=="a" || c=="e" ||c =="i" || c=="o" || c=="u"){
        count++
    }
}
console.log("count ",count)

