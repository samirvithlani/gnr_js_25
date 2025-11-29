//nested if..
//movie --> th->mall -->mall sec->yes --> the -->ticket -->movie

var age = 17;

if (age >= 18) {
  console.log("user is eligible for voating...");
  if (age >= 21) {
    console.log("user is eligible for marrige...");
  } else {
    console.log("user is not eligible for marrige...");
  }
} else {

  console.log("user is not eligible for voating...");
    if(age>16){
        console.log("user is eligible for driving..")
    }
    else{
        console.log("stay at home...")
    }

}
