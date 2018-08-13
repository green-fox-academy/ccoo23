function Sharpie(c, w) {
  this.color = c;
  this.width = w;
  this.inkAmount = 100;
  this.use = function use() {
    this.inkAmount -= this.width;
  };
}
const sharpie = new Sharpie('red', 10);
// console.log(sharpie);
for (let i = 0; i <= 100 / sharpie.width; i++) {
  sharpie.use();
  if (sharpie.inkAmount < 0) {
    break;
  }
  console.log(sharpie);
}
