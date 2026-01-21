var marks = [23,24,22,21,25,19,21]
//if any subject marks >=24 true false
var flag = false

for(let i=0;i<marks.length;i++){
    if(marks[i]>=24){
        flag = true
        break
    }
}
console.log(flag)

//every  subject must grt 23 marks

var flag = true

for(let i=0;i<marks.length;i++){
    if(marks[i]<23){
        flag = false
        break
    }
}
console.log(flag)