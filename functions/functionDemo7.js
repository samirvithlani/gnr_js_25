const science  =()=>{
    console.log("science function called...")
}
const comm  =()=>{
    console.log("comm function called...")
}
const arts  =()=>{
    console.log("arts function called...")
}

const admission = (x)=>{

    console.log("admission function called...")
//    console.log(x) //sci
    x()

}

//admission(science)
//admission(comm)
//admission(arts)

var pers = 77
if(pers>=80){
    admission(science)
}
else if(pers>=70){
    admission(comm)
}
else if(pers>=60){
    admission(arts)
}