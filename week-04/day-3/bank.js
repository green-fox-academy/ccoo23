function getRandomInt() {
  const min = Math.ceil(0);
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min)) + min;
}
function Bank() {
  var history = [];
  let balance = 0;
  let pinCode = '0000';
  const accountNumber = Math.floor(Math.random() * 89999 + 10000);
  this.initializePin = () => {
    pinCode = `${getRandomInt()}${getRandomInt()}${getRandomInt()}${getRandomInt()}`;
    console.log(pinCode);
    history.push(`pin generation for ${accountNumber}`);
    return pinCode;
  };
  this.regeneratePin = (currentPin, newPin) => {
    var error;
    try {
      if (currentPin === pinCode) {
        pinCode = newPin;
        history.push(`pin regenerated for '${accountNumber}'`);
        console.log(pinCode);
      } else {
        throw error = new Error('pin is wrong');
      }
    } catch (e) {
      console.log(e);
    }
  };
  this.deposit = (inputCode, money) => {
    if (inputCode === pinCode && typeof money === 'number') {
      balance += money;
      history.push(`deposit ${money} to ${accountNumber}`);
    } else {
      return false;
    }
  };
  this.withdrawer = (inputCode) => {
    var error;
    if (inputCode === pinCode) {
      return function withdraw(moneyYouTake) {
        if (moneyYouTake < balance) {
          balance -= moneyYouTake;
          history.push(`deposit ${moneyYouTake} to ${accountNumber}`);
        }
        else {
          balance = 0;
          try {
            throw error = new Error('you dont have enough money');
          } catch (e) {
            console.log(e);
          }
        }
      };
    } else {        //eslint-disable-line
      return false;
    }
  };
  this.getPin = () => { return pinCode; };
  this.getBalance = () => { return balance; };
  this.getHistory = () => {return history; };
}
const bank = new Bank();
bank.initializePin();
// bank.regeneratePin(bank.getPin(), 9999);
// console.log(bank.pinCode);
console.log(bank.getPin());
bank.deposit(bank.getPin(), 1000);
bank.withdrawer(bank.getPin())(10);
console.log(`you money left :  ${bank.getBalance()}`);
console.log(bank.getHistory());
