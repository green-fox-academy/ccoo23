const btn = document.querySelector('button');    //eslint-disable-line
const paragraph = document.querySelector('p');   //eslint-disable-line
function view(text) {
  paragraph.innerText = text;
}
btn.addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
    .then((response) => { response.json(); }, (error) => {
      console.log(error);
    })
    .then((myJson) => {
      console.log(myJson.value.joke);
      view(myJson.value.joke);
    });
});


// function ajax(url, method) {
//   const promise = new Promise((resolve, reject) => {
//     const httpRequest = new XMLHttpRequest();
//     function handler() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve('functional');
//       } else {
//         reject(new Error(this.statusText));
//       }
//     }
//     httpRequest.open(method, url);
//     httpRequest.onreadystatechange = handler;
//     httpRequest.onload = () => {
//       const responseData = JSON.parse(httpRequest.responseText);
//       console.log(responseData);
//     };
//     httpRequest.setRequestHeader('Content-Type', 'application/json');
//     httpRequest.send();
//   });

//   return promise;
// }
