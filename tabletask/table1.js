const header = document.querySelector("#tableheader")
const size = 15

let headerrow = "<tr><th>X</th>"
for(let i=1;i<=size;i++){
     headerrow+=`<th>${i}</th>`
}
headerrow+="</tr>"
header.innerHTML = headerrow

let body = document.querySelector("#tablebody")
let bodyHtml =""
for(let i=1;i<=size;i++)
{
     bodyHtml += `<tr><th>${i}</th>`
    for(let j=1;j<=size;j++){
        bodyHtml+= `<td>${i*j}</td>`
    }
    bodyHtml+="</tr>"

}
body.innerHTML =bodyHtml
