var city = ["gandhinagar","ramnagar","surendranagar","ahmedabad","rajkot","pune","himmatnagar"]

// var nagarcity=[]

// // for(let i=0;i<city.length;i++){
// //     if(city[i].endsWith("nagar")){
// //         nagarcity.push(city[i])
// //     }
// // }

var nagarcity = city.filter((c)=>{
    return c.endsWith("nagar") //true --> push --->false --> no push
    //return predicate ---> true false
})
console.log(nagarcity)

var filtercity = city.filter((c)=>c.length<=5)
console.log(filtercity)

var discount = [12.5,17,0,90,87,100.00,78,101.10]

//free product..
var freeprod = discount.filter((d)=>d>=100)
console.log(freeprod)