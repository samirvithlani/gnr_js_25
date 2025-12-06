var no = 123 //no of digits = 3
// 123 % 10 =893
// 123 /10 = 12

//123 / 10 = 12 1
//12 /10  = 1 2
//1 / 10 = 0 3

//7643
// 7643 / 10 764 1
// 764 / 10 76 2
// 76 / 10 7 3
// 7/ 10 0 4

var x = 10.99 // 10
console.log(Math.floor(x)) //10

var count =0;
while (no>0){
    //no = no /10
    no = Math.floor(no/10)
    //console.log(no)
    count++
}
console.log("count....",count)