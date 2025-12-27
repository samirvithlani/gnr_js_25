// //student data
// var sname ="amit"
// var sage = 23
// var email ="amit@gmail.com"
// //20 records...

// console.log("sname = ",sname)
// console.log("sage = ",sage)
// console.log("semail = ",email)

//object
//key:value
var student = {
  name: "amit",
  age: 23,
  email: "amit@gmail.com",
  address: {
    state: "Gujarat",
    city: "ahmedabad",
    pincode: 380052,
    street: "opp mm",
  },
};
console.log(student);
console.log("name = ", student.name);
console.log("age = ", student.age);
console.log("email = ", student.email);
//console.log("state = ", student.state);//undefined
console.log(student.address)
console.log(student.address.state)
console.log(student.address.city)

//create json for book min 10 fileds required
//create json for product min 8 fileds
//create json on your own
