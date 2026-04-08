var user = {id:1,name:"amit",age:23}
const storeData =()=>{
    localStorage.setItem("id","101")
    //localStorage.setItem("user",user)
    localStorage.setItem("user",JSON.stringify(user))
}


const getData= ()=>{
    var id = localStorage.getItem("id")
    const user = JSON.parse(localStorage.getItem("user"))

    console.log(id)
    console.log(user)
}

const clearData = ()=>{
    // localStorage.removeItem("id")
    // localStorage.removeItem("user")

    localStorage.clear()
}



const  store = document.getElementById("store")
store.addEventListener("click",storeData)

const  get = document.getElementById("get")
get.addEventListener("click",getData)

const  clear = document.getElementById("clear")
clear.addEventListener("click",clearData)