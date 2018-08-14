function first() {
  return new Promise((resolve, reject) => {
    resolve('first is fine');
    reject(new Error('first is wrong'));
  });
}
const second = first().then((value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    resolve('second is fine');
    reject(new Error('second is wrong'));
  });
}, console.log);
function onFulfilled(value) {
  console.log(value);
}
second.then(onFulfilled, onFulfilled);
