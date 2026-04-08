var user ={id:1,name:"raj",age:23}
console.log(user)
var struser = JSON.stringify(user)
console.log(struser)
console.log(struser[0])

///strinf to object
var user1 = JSON.parse(struser)
console.log(user1)

