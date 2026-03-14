//remove child..
const books = document.querySelector("#books")
console.log(books)
//how to get inner li
console.log(books.childNodes)
//get li only
console.log(books.children) //[array]

//get book1 name..
console.log(books.children[0].innerHTML)

//remove firstBook..using childern[0] index
//usinfg remove children
books.children[0].remove()


// const h1 = document.getElementById("text")
// h1.remove()

