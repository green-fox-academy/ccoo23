const getTextBtn = document.querySelector('.getText');
const submitBtn = document.querySelector('.submit');
const textArea = document.querySelector('textarea');
var newText = '';
var id = 0;
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
  console.log(index);
  for (let c = index.length - 1; c >= 0; c--) {
    splitOne.splice(index[c], 1);
  }
  console.log(splitOne);
  return splitOne.join(' ');
}
function setLintener() {
  getTextBtn.addEventListener('click', () => {
    fetch('https://mellow-sugar.glitch.me/text', {
      method: 'GET',
    })
      .then((res) => { return res.text(); })    //eslint-disable-line
      .then((res) => {
        id = JSON.parse(res).id;
        let rawText = JSON.parse(res).text;
        // test.innerText = rawText;
        newText = transform(rawText);
        textArea.innerText = newText;
      });
  });
  submitBtn.addEventListener('click', () => {
    if (newText === '') {
      alert('click the left button first');
    }
    fetch('https://mellow-sugar.glitch.me/text', {
      method: 'POST',
    })
      .then((res) => {              //eslint-disable-line
        return res.text();
      })
      .then((res) => {
        console.log(res);
      });
    console.log(typeof (newText));
  });
}
setLintener();
