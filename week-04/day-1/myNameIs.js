const Eminem = {
  name: 'Slim shady',
  speak: function speak() {
    const h1 = document.querySelector('h1');
    h1.innerText = this.name;
  // 1) Update the <h1> node text to this.name
  },
};
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  Eminem.speak();
});
// 2) Add a click event on the button and assign Eminem.speak to it
// Don't use a wrapper function