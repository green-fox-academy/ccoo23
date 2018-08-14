const promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
  console.log('MAIN PROGRAM');
});
promise.then(console.log, null);
