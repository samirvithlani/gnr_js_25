var userName = "jayraj"
var flag = userName.startsWith("j")
console.log(flag)

var flag = userName.endsWith("j")
console.log(flag)

//without using function check

var flag = false;
if(userName[0]=="j"){
    flag = true
}
console.log(flag)

var flag = false;
if(userName[userName.length-1]=="j"){
    flag = true
}
console.log(flag)