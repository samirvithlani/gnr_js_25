const btn = document.getElementById("btn")
console.log(btn) //<button>

//1st param -> event
//2nd param function
btn.addEventListener("click",()=>{
    btn.innerText="CLICKED"
})
btn.addEventListener("mouseenter",()=>{
    btn.style.background="green"
    btn.style.color="white"
})

btn.addEventListener("mouseleave",()=>{
    btn.style.background="white"
    btn.style.color="black"
})
btn.addEventListener("mousemove",()=>{
    btn.style.cursor ="grab"
})

const text = document.getElementById("text")
text.addEventListener("keyup",()=>{
    console.log(text.value)
})