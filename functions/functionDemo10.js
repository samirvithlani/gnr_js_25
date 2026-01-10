const science = (name) => {
  console.log(`${name} your admission in science confirmed..`);
  return `welcome ${name}`
};
const commerce = (name) => {
  console.log(`${name} your  admission in commerce confirmed..`);
  return `welcome ${name}`
};



const admission = (cb,name)=>{

    //cb == sc,com
    console.log(`admission function called...`)
    //cb("raj") //science //commerce
    var message = cb(name)

    //console.log(`message = ${message}`)

    return message
}

var pers=71
var studentName ="amit" //promt
var data; 

if(pers>=80){
    data = admission(science,studentName)
}
else if(pers>=70){
    data = admission(commerce,studentName)
}
console.log(`message = ${data}`)
