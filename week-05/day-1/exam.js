const getTextBtn = document.querySelector('.getText');
const submitBtn = document.querySelector('.submit');
const textArea = document.querySelector('textarea');
function setLintener() {
  getTextBtn.addEventListener('click', () => {
    // fetch('https://mellow-sugar.glitch.me/text', {
    //   method: 'GET',
    // })
    //   .then((response) => { response.json(); }, (error) => {
    //     console.log(error);
    //   })
    //   .then((myJson) => {
    //     console.log(myJson);
    //   });
    fetch('https://mellow-sugar.glitch.me/text', {
      method: 'GET',
    })
      .then((res) => { return res.text(); })    //eslint-disable-line
      .then((res) => {
        textArea.innerText = JSON.parse(res).text;
        console.log(res);
      });
  });
}
setLintener();
