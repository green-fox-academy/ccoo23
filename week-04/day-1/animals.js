function Animals() {
  this.hunger = 5;
  this.thirst = 5;
  this.eat = function eat() {
    this.hunger -= 1;
  };
  this.drink = function drink() {
    this.thirst -= 1;
  };
  this.play = function play() {
    this.hunger += 1;
    this.thirst += 1;
  };
}

function Farm(number) {
  this.slots = number;
  this.Animals = [];
  for (let i = 0; i < number; i++) {
    const tempObj = new Animals();
    // console.log(tempObj);
    this.Animals[i] = tempObj;
  }
  this.breed = function breed() {
    const tempObj2 = new Animals();
    this.Animals[this.Animals.length] = tempObj2;
  };
  this.slaughter = function slaughter() {
    console.log('works 3');
    console.log('animallength' + this.Animals.length);
    let index = 0;
    let tmp = 0;
    tmp = this.Animals[0].hunger + this.Animals[0].thirst;
    console.log(tmp);
    for (let i = 1; i < this.Animals.length; i++) {
      if ((this.Animals[i].hunger + this.Animals[i].thirst) > tmp) {
        tmp = this.Animals[i].hunger + this.Animals[i].thirst;
        index = i;
      }
    }
    console.log('works after loop');
    
    // this.Animals.splice(index, 1);
  };
}
function isChosen() {
  const c = Math.random();
  return (c < 0.5);
}
function print(object) {
  const sheeps = object.Animals.length;
  //console.log(sheeps);
  if (sheeps === 0) {
    console.log('bankrupt');
  } else if (sheeps === 20) {
    console.log('full');
  } else {
    console.log('ok');
  }
}
function progress(obj) {
  for (let i = 0; i < 20; i++) {
    console.log('works');
    if (isChosen()) {
      obj.Animals[i].play();
    }
    if (isChosen()) {
      obj.Animals[i].drink();
    }
    if (isChosen()) {
      obj.Animals[i].eat();
    }
  }
  if (obj.slots < 20) {
    console.log('works 2');
    obj.slots.breed();
  }
  obj.slaughter();
  console.log(obj);
  print(obj);
}
// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);
console.log(SheepFarm);
console.log(SheepFarm.Animals); // Should log 20 Animal objects

const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', () => {
  console.log('s');
  progress(SheepFarm);
});
// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full