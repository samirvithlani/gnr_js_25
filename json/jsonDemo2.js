var student ={
    id:1,
    name:"amit",
    age:23
}

console.log(student)
// student.age = 24
// console.log(student)
// student.marks = 100
// console.log(student)

// spread operator ...
student = {...student,age:24,marks:100}
console.log(student)

var marks = [100,200,300]
console.log(marks)
var newMarks = [...marks,400]
console.log(newMarks)