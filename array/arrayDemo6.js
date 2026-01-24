var users = ["amit","sumit","jay","raj","ajay","parth"]
console.log(users)

// for(let i=0;i<users.length;i++){
//     upperUser.push(users[i].toUpperCase())
// }

//u == users[i]

//map will retuen all elements any how
var upperUser = users.map((u)=>{
    return u.toUpperCase()
})
console.log(upperUser)

var upperUser1 = users.map((u)=>u.toUpperCase())
//var upperUser1 = users.map((u)=>u.length>3) ->check output..
console.log(upperUser1)

sales = [100,200,300,400,500,600,700,800,900,1000]