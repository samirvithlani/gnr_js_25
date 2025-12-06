//1;2;3
//initi part
//condition part
//incremetn decrement

//1to 1100 i->1
//cond ->101
//

// for(let i=1;i<=10;i++){
//     console.log(i) 
// }

//print table in below fmt
// 5 * 1 = 5
//

// var no =5;
// for(let i=1;i<=10;i++){
//     console.log(no," * ",i," = ",no*i)
// }

//declare sp,ep - in print no bw, and do sum..
// var sp = 1
// var ep =10
// var sum=0
// for(let i=sp;i<=ep;i++){
//     console.log(i)
//     //0 = 0 + 1 = 1
//     //1 = 1 + 2 = 3
//     //3 = 3 + 3 = 6
//     sum = sum +i;
// }
// console.log("sum = ",sum)

//even no print...
//do even sum sep and odd sum sep..


// var sp =1,ep=20,evensum=0,oddsum=0;

// for(let i=sp;i<=ep;i++){
//     if(i%2==0){
//         console.log(i)
//         evensum = evensum + i;
//     }
//     else{
//         oddsum = oddsum+i
//     }
// }
// console.log(evensum)
// console.log(oddsum)

//fiboanacii series...
//0 1 1 2 3 5 8 13..

var a = 0,b=1,sum=0
console.log(a,b)
for(let i=1;i<=10;i++){

    //sum = 1
    //sum = 1 + 1 = 2
    //sum = 1 + 2 = 3
    sum = a + b
    console.log(sum) //1  2
    a = b //a = 1 a =1
    b = sum//b = 1 b = 2
    

}