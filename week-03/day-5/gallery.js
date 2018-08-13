const picArray = [
  { src: 'husky.jpg', description: 'This is a dog.', tital: 'Husky' },
  { src: 'cat.jpg', description: 'These are two cat pics.', tital: 'Funny cats' },
  { src: 'trevor.jpg', description: 'This is a charactor form Grand Theft Auto.', tital: 'Trevor Philip' },
  { src: 'view.jpg', description: 'I do not know this place.', tital: 'Landscape' },
  { src: 'ronaldo.jpg', description: 'This is Cristiano Ronaldo in Juventus.', tital: 'World\'s best football player' },
  { src: 'keyboard.jpg', description: 'This is a nice keyboard.', tital: 'Leopard' },
  { src: 'kimi.jpg', description: 'This is a Kimi Raikkonen from Ferrari.', tital: 'Kimi Raikkonen' },
];
const canvas = document.getElementsByClassName('m2')[0];
const smalls = document.getElementsByClassName('small');
// const dissDown = document.getElementsByClassName('dissDown')[0];
const downText = document.getElementsByClassName('downText')[0];
const upText = document.getElementsByClassName('upText')[0];
const leftArrow = document.getElementsByClassName('m1')[0];
const rightArrow = document.getElementsByClassName('m3')[0];
let counter = 0;

function showMouse(num) {
  document.getElementsByClassName('test')[num].style.display = 'inline-block';
  document.getElementsByClassName('letter')[num].style.display = 'inline-block';
}
function loadListeners(i) {
  smalls[i].addEventListener('click', () => {
    canvas.style.background = 'url(' + picArray[i].src + ') no-repeat';
    canvas.style.backgroundSize = '100% 100%';
    downText.innerHTML = picArray[i].description;
    upText.innerHTML = picArray[i].tital;
    counter = i;           //four steps
    console.log(i);
  });
  smalls[i].addEventListener('mouseover', () => {
    document.getElementsByClassName("test")[i].style.display = 'inline-block';
    document.getElementsByClassName("letter")[i].style.display = 'inline-block';
  });
  smalls[i].addEventListener('mouseout', () => {
    document.getElementsByClassName("test")[i].style.display = 'none';
    document.getElementsByClassName("letter")[i].style.display = 'none';
  });
}
function initPics() {
  for (let i = 0; i < smalls.length; i++) {
    smalls[i].style.background = 'url(' + picArray[i].src + ') no-repeat';
    smalls[i].style.backgroundSize = '100% 100%';
  }
}
function setListeners() {
  for (let i = 0; i < picArray.length; i++) {
    loadListeners(i);
  }
}


initPics();         //show small pics
setListeners();
// smalls[0].onmouseover = showMouse(0);
rightArrow.addEventListener('click', () => {
  ++counter;
  let picNum = Math.abs(counter % (picArray.length));
  console.log(picNum);
  canvas.style.background = 'url(' + picArray[picNum].src + ') no-repeat';
  canvas.style.backgroundSize = '100% 100%';
  downText.innerHTML = picArray[picNum].description;
  upText.innerHTML = picArray[picNum].tital;
});
leftArrow.addEventListener('click', (e) => {
  --counter;
  if (counter < 0)
    counter += 7;
  let picNum = Math.abs(counter % (picArray.length));
  console.log(picNum);
  canvas.style.background = 'url(' + picArray[picNum].src + ') no-repeat';
  canvas.style.backgroundSize = '100% 100%';
  downText.innerHTML = picArray[picNum].description;
  upText.innerHTML = picArray[picNum].tital;
});
window.onload = function () {
  canvas.style.background = 'url(' + picArray[0].src + ') no-repeat';
  canvas.style.backgroundSize = '100% 100%';                 //fit the pic
  downText.innerHTML = picArray[0].description;
  upText.innerHTML = picArray[0].tital;
}
