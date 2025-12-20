var sent = "hi this is new india, will come to your home and will hit hard"

//you have to find lonest word
var firstWord = ""

for(let i=0;i<sent.length;i++){
    firstWord = firstWord + sent[i]
    if(sent[i]==" "){
        break
    }
    
}
console.log(firstWord)