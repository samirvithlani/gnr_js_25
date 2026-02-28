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


    const gender = document.getElementsByName("gender") //[][]
    //console.log(gender)
    // if(gender[0].checked==true){
    //     console.log(gender[0].value)
    // }
    // else if(gender[1].checked==true){
    //     console.log(gender[1].value)
    // }

    for(let i=0;i<gender.length;i++){
        if(gender[i].checked==true){
            console.log(gender[i].value)
        }
    }

    const hobbies = document.getElementsByName("hobbies")
    ///console.log(hobbies)
    for(let i=0;i<hobbies.length;i++){
        if(hobbies[i].checked==true){
            console.log(hobbies[i].value)
        }
    }

    const country = document.getElementById("country")
    console.log(country.value)




}