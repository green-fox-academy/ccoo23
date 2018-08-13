const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function deposit(amount) {
    const more = amount * (1 - parseInt(this.tax, 10) / 100);
    this.cash += more;
  },
};
const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function deposit(amount) {
    const more = amount * (1 - parseInt(this.tax, 10) / 100);
    this.cash += more;
  },
};
const Shuffler = {
  cash: 10000,
  pick: function pick() {
    if (this.cash % 2000 === 0) {
      console.log('Panama got 1000');
      Panama.deposit(1000);
    } else {
      console.log('Cyprus got 1000');
      Cyprus.deposit(1000);
    }
    this.cash -= 1000;
  },
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000
console.log(Cyprus.cash); // 2000