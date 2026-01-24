var users = ["amit","sumit","jay","raj","ajay","parth"]
var upperUser =[]

//output["AMIT","SUMIT",...]

for(let i=0;i<users.length;i++){
    upperUser.push(users[i].toUpperCase())
}
console.log(upperUser)

var sales = [100,120,140,160,180,200]
//add 10 % profit in all elements and store in salesprofit array
//output[120,....]