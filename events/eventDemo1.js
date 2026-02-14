const test = () => {
  //alert("function callled....")
  var text = document.getElementById("txt"); //<h1>
  //console.log(text) //<h>
  //console.log(text.innerText) //<h1>.....innerText
  text.innerText = "HI";
};
var count = 0;
const getBox = () => {
  //alert("box...")
  count++;
  const box = document.getElementById("box"); //<div>
  if (count % 2 == 0) {
    box.style.backgroundColor = "black";
  } else {
    box.style.backgroundColor = "red";
  }
};

const changeLink = () => {
  const link = document.getElementById("link");
  link.href = "https://www.netflix.com";
  link.innerText = "Netflix";
};
