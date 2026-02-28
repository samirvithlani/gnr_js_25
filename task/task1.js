const calculate =()=>{
    var text = document.getElementById("text").value // 10*2
    console.log(text);
    var operators = ["+","-","*","/"]
    let op;

    for(let i=0;i<operators.length;i++){
        
        if(text.includes(operators[i])){
           // console.log(operators[i]) //which
           op = operators[i]
           break;
        }
    }
    //console.log("ope",op)
    if(!op){
        console.log("invalid string")
        return
    }
    const parts = text.split(op)
    console.log(parts)
    //valid 10*2
    //notvalid 10*
    
    

    const num1 = Number(parts[0])
    const num2 = Number(parts[1])

    //num1 or no2 blank -->

    console.log("num 1= ",num1)
    console.log("num 2= ",num2)

    switch(op){
        case "+":
            console.log(num1+num2) ///html
        break
        case "*":
            console.log(num1*num2)    
    }

    
}