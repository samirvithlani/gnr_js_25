function demo() {
  return 100; //value...
}

var x = demo();
console.log(x);

// function demo2() {
//   let a = 100;
//   let b = 200;
//   let c = a + b;
//   return c;
// }

function demo2() {
  let a = 100;
  let b = 200;
  return a + b;
}
var x1 = demo2();
console.log(x1);

// function avg(a, b, c) {
//   let total = a + b + c;
//   let average = total / 3;

//   return average;
// }


function avg(a, b, c) {
  return (a+b+c)/3;
}
var x2 = avg(10,20,30)
console.log(x2)

function getFullName(fname,lname){

    return fname  + " "+ lname
}

var fullName = getFullName("virat","kohli")
console.log(fullName)

//if function is returing any value and we need to print only
//we can call that function in log() direclt


console.log(getFullName("sachin","tendulkar"))