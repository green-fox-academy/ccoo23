// // const promise = new Promise((resolve, reject) => {
// //   resolve(1);
// // });
// // console.log(promise);

// // promise
// //   .then(result => console.log(`result: ${result}`))
// //   .catch(err => console.log(`err: ${err}`))
// //   .finally(() => console.log('finally'));

// const getPromise = () =>{
//   return new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//       resolve('hello');
//     }, 2000);
//   });
// }
// function getPromiseResult() {
//   // const promise = getPromise();
//   // promise.then(result => console.log(result));
//   const promiseResult = await getPromise();
//   console.log(promiseResult);
//   return promiseResult;
// }

// getPromiseResult();
////////////////////////////////////////////////////////////////////////////////////////
// const promise = ajaxPromise(URL);
// console.log(promise);
// promise
//   .then(result => ajaxPromise(`${URL}/${result.name[0]}`))
//   .then(result => ajaxPromise(`${URL}/${result.name[0]}/${result.pets[0]}`))
//   .then(result => console.log(result));


// fetch(URL)
//   .then(result => result.json())
//   .then(onj => fetch(`${URL}/${obj.name[0]}`))
//   .then(result => result.json())
//   .then(result => console.log(result));

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}
//setTimeout返回promise实例
timeout(3000).then((value) => {
  console.log(value);
});
