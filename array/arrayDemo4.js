var marks = [23,24,25,21,22,19,21]

//atleast one subject marks is grt >= 25

// var flag = false

// for(let i=0;i<marks.length;i++){
//     if(marks[i]>=24){
//         flag = true
//         break
//     }
// }
// console.log(flag)
//som internal loop -->
//m == marks[i]
var flag = marks.some((m)=>{
    return m>=25
})
console.log("flag",flag)

var flag1 = marks.every((m)=>{
    return m>=18
})
console.log("flag1",flag1)