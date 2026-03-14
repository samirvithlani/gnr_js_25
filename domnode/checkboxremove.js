const list = document.querySelector("#list")
const checkboxes = document.querySelectorAll("#list input")

checkboxes.forEach((ch)=>{
    ch.addEventListener("change",function(){
        // if(ch.checked){
        //     const li = ch.closest("li")
        //     li.remove()
        // }
        if(this.checked){
            const li = this.closest("li")
            li.remove()
        }
    })
})