var marks = [10,112,565,763,20,21,256,22,18,19,23]
//sort

// 0 1 2 3 4 5 6 7 8 9

//199 //22 
//var sortedmarks = marks.sort()
var sortedmarks = marks.sort((a,b)=>{
    return a - b
})
console.log(sortedmarks)

//a =10 , b = 10  ---> compare -- a == b -->0
//a =11 , b = 10 --> com a ==b  --> 1
//a = 12 , b =25 --> -1

//merge sort

var names = ["ram","amit","sumit","ankit","par","neha","abc"]
var sortedNames = names.sort()
console.log(sortedNames)

var sortedbylen = names.sort((a,b)=>a.length - b.length)
console.log(sortedbylen)

//reserch chcek sort algo