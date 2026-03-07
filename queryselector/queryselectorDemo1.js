const getData =()=>{
    const text1 = document.getElementById("text1")
    console.log(text1.innerText)
    const names = document.getElementsByName("data")
    console.log(names[0].innerText)
    console.log(names[1].innerText)

    const boxes = document.getElementsByClassName("box")
    console.log(boxes)


    const qtext1 = document.querySelector("#text1") // #id
    console.log(qtext1.innerText)

    const qname = document.querySelector("[name=data]")
    console.log(qname.innerText)

    const qnames = document.querySelectorAll("[name=data]")
    console.log(qnames)

    const allboxes = document.querySelectorAll(".box")
    console.log(allboxes)

    const ptags = document.querySelectorAll("p")
    console.log(ptags[0].innerText)

}