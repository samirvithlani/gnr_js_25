const findMax = (no1, no2) => (no1 > no2 ? no1 : no2);
console.log(findMax(100, 1000));

const isValid = (name) => (name.includes(" ") ? true : false);
console.log(isValid("virat kohli"));

//if any function is returing bool value we can call() that function in if statment  insted of condition

if(isValid("ms dhoni")){
    console.log("valid.....")
}
else{
    console.log("not valid...")
}


//task 1 create function which will take 2 string argument and return bigger length string
