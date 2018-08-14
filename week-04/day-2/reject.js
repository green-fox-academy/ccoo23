const promise = new Promise((fulfill, reject) => {
  setTimeout(() => reject(new Error('REJECTED!!')), 300);
});
function onReject(error) {
  console.log(error);
}
promise.then(null, onReject);
