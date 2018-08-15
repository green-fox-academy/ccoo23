function multiplier(times) {
  return function (num) {
    return num * times;
  }
}
const duplicator = multiplier(2);
console.log(duplicator(5));
