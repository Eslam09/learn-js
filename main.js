let taskes = [];
let input = document.querySelector(".input").value;
let add = document.querySelector(".add");
let target = document.querySelector(".taskes");
function checkInput(as) {
  if (as === "") {
    let textNode = document.createTextNode("Can't Be Empty!");
    return textNode;
  } else {
    let textNode = document.createTextNode(as);
    return textNode;
  }
}
function task(ele) {
  let contaner = document.createElement("div");
  let p = document.createElement("p");
  let button = document.createElement("button");
  p.appendChild(checkInput(ele));
  contaner.appendChild(p);
  contaner.appendChild(button);
  taskes.push(contaner);
  window.localStorage.setItem("list", taskes[0].innerText);
}
