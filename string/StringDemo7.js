var data = "scrcipcts"
//c -->index.
//c =1
//index = 1
//t 
//index = 5
//x
//index = -1

var index = -1;
var count =0;
for(let i=0;i<data.length;i++){
    if(data[i]=='c'){
        //i == index
        //index = i
        index = i 
        //count++;
        // if(count==2){
        //     index =i    
        //     break; //it will give first occurance
        // }
        // //break; //it will give first occurance
        break;
    }
}
console.log(index)