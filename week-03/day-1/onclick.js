const select1 = document.createElement("select");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const select2 = document.createElement("select");
const div = document.createElement("div");
const buttonDiv = document.createElement("div");
button1.innerText = 'up';
button2.innerText = 'down';
button3.innerText = 'X';
button4.innerText = '>';
button1.style.display = "block";
button2.style.display = "block";
button3.style.display = "block";
button4.style.display = "block";
button1.style.width = "50px";
button2.style.width = "50px";
button3.style.width = "50px";
button4.style.width = "50px";
//////////////////////button


select1.style.width = "100px";
select1.style.height = "120px";
select2.style.height = "120px";
select2.style.width = "100px";
select1.multiple = "multiple";
select2.multiple = "multiple";
const food = ['bread', 'milk', 'orange', 'tomato'];
for (let i = 0; i< food.length; i++){
    let name = document.createElement('option');
    name.innerText = food[i];
    select1.appendChild(name);
}
///////////////////////select



div.appendChild(select1);
buttonDiv.appendChild(button1);
buttonDiv.appendChild(button2);
buttonDiv.appendChild(button3);
buttonDiv.appendChild(button4);
buttonDiv.style.display = "inline-block";

div.appendChild(buttonDiv);
div.appendChild(select2);
document.getElementsByTagName("body")[0].appendChild(div);

button1.onclick = function click1() {
  for (let i = 0; i < select1.children.length; i++) {
    const c = select1.children[i];
    // console.log(c);
    if (c.selected && i !== 0) {
      select1.insertBefore(c, select1.children[i - 1]);
    }
  }
};
button2.onclick = function click2() {
  for (let i = 0; i < select1.children.length; i++) {
    const c = select1.children[i];
    // console.log(c);
    if (c.selected && i !== select1.children.length) {
      select1.insertBefore(c, select1.children[i + 2]);
      break;
    }                                 //if  no  break  , it will continue the for loop
  }
};
// button2.onclick = function click2() {
//   for (let i = select1.children.length; i > 0; i--) {
//     const c = select1.children[i];
//     if (c.selected && i !== 0) {
//       select1.insertBefore(c, select1.children[i - 1]);
//     }
//   }
// };
button3.onclick = function click3() {
  for (let i = 0; i < select1.children.length; i++) {
    const c = select1.children[i];
    // console.log(c);
    if (c.selected && i !== select1.children.length) {
      select1.removeChild(c);
    }
  }
};
button4.onclick = function click4() {
  for (let i = 0; i < select1.children.length; i++) {
    const c = select1.children[i];
    if (c.selected) {
      select2.appendChild(c);
    }
    select1.children[0].selected = true;
  }
};
