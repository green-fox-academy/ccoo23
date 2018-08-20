const getTextBtn = document.querySelector('.getText');
const submitBtn = document.querySelector('.submit');
const textArea = document.querySelector('textarea');
const p = document.querySelector('p');
var newText = '';
var textId = 0;
// const test = document.querySelector('.test');
function transform(str) {
  let splitOne = str.split(' ');
  console.log(splitOne);
  let index = [];
  for (let i = 0; i < splitOne.length; i++) {
    if (splitOne[i] === '') {
      index.push(i);
    }
  }
  for (let c = index.length - 1; c >= 0; c--) {
    splitOne.splice(index[c], 1);
  }
  return splitOne.join(' ');
}
function setLintener() {
  getTextBtn.addEventListener('click', () => {
    fetch('https://mellow-sugar.glitch.me/text', {
      method: 'GET',
    })
      .then((res) => { return res.text(); })    //eslint-disable-line
      .then((res) => {
        textId = JSON.parse(res).id;
        // test.innerText = rawText;
        newText = transform(JSON.parse(res).text);
        textArea.innerText = newText;
      });
  });
  submitBtn.addEventListener('click', () => {
    if (newText === '') {
      alert('click the left button first');
    }
    let number = parseInt(textId);
    console.log({ id: number, text: newText });
    console.log({ id: 2, text: "newText" });
    let obj1 = { id: number, text: newText };
    let obj2 = { id: 2, text: "newText" };
    console.log(newText);
    console.log('newText');
    fetch('https://mellow-sugar.glitch.me/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // body: new URLSearchParams(JSON.stringify({ id: textId, text: newText })).toString(),
      // body: JSON.stringify({ id: textId, text: newText }),
      body: JSON.stringify({
        id: number,
        text: newText,
      }),
    })
      .then((res) => {              //eslint-disable-line
        return res.text();
      })
      .then((res) => {
        console.log(res);
        if (res === '') {
          p.innerHTML = 'OK';
          p.style.color = 'green';
          p.style.fontWeight = 'bolder';
        } else {
          p.innerHTML = 'ERROR';
          p.style.color = 'green';
          p.style.fontWeight = 'bolder';
        }
      });
  });
}
setLintener();
