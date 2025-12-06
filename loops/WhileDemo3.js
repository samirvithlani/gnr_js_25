//123 --> 1 + 2 + 3
//123 % 10 remen 3
//123 / 10 --> 12
//12 % 10  2
//12 / 10 1
//1 % 10 = 1
//1/10 ==0

var no =123
var rem,sum=0;

// rem = no % 10 //3
// sum = sum +rem // 3
// no = Math.floor(no/10) //12


// rem = no %10 //2
// sum = sum + rem //5
// no = Math.floor(no/10)


// rem = no %10 //2
// sum = sum + rem //5
// no = Math.floor(no/10)

while(no>0){
    rem = no %10 //2
    sum = sum + rem //5
    no  = Math.floor(no/10)

}

console.log("sum of digit = ",sum)