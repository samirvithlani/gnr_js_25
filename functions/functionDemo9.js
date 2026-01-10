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
    console.log(`message = ${message}`)

}

var pers=71
var studentName ="amit" //promt

if(pers>=80){
    admission(science,studentName)
}
else if(pers>=70){
    admission(commerce,studentName)
}
