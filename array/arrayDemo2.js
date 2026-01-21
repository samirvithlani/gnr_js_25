var marks = [78,65,79,90,61,88]

for(let i=0;i<marks.length;i++){
    console.log(i,"-",marks[i])
}


//foreach

// marks.forEach((m)=>{
//     console.log(m)
// })

//marks.forEach((m)=>console.log(m))
marks.forEach((m,index)=>console.log(index,"-",m))