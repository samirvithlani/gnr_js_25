const submitHandler = (event)=>{
    
    event.preventDefault();
    console.log("event...",event)
    const name = document.getElementById("name") //<input>
    const nameValue = document.getElementById("nameValue")

    if(name.value.length<=0){
        nameValue.innerHTML = "Name is Required*"
        nameValue.style.color = "red"
    }
    else{
        console.log(name.value)
        nameValue.innerHTML = name.value
        nameValue.style.color="black"
    }

}