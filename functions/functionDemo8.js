const science = (name) => {
  var x = 100,
    y = 200;
  //console.log("science called.. ",x,"y=",y)
  //console.log(`x = ${x} y = ${y}`)
  console.log(`${name} your admission in science confirmed..`);
};
const commerce = (name) => {
  console.log(`${name} your  admission in commerce confirmed..`);
};



const admission = (cb,name)=>{

    //cb == sc,com
    console.log(`admission function called...`)
    //cb("raj") //science //commerce
    cb(name)

}

var pers=81
var studentName ="amit" //promt

if(pers>=80){
    admission(science,studentName)
}
else if(pers>=70){
    admission(commerce,studentName)
}
