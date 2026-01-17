var countries = ["india","china","russia","brazil"]
console.log(countries)
//console.log(countries[0])

//param length..

// for(let i=0;i<countries.length;i++){
//     console.log(countries[i])
// }

// add
//insertation..
//array is collection of elements
//array allows hetrogeniuos data
//array allows duplicate element
//array stores data in index manner
//array is mutable..

countries.push("usa")
console.log(countries)
countries.unshift("Bharat")
console.log(countries)


var countries = ["india","china","russia","brazil"]
console.log(countries)
var removedElm = countries.pop() //it will remove last element...
console.log("removing....",removedElm)
console.log(countries)

var removedElm  = countries.shift()
console.log("removing....",removedElm)
console.log(countries)