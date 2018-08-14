function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, 'TIME OUT!');
  });
}
timeout(300).then((value) => {
  console.log(value);
});
