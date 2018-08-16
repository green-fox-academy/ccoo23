class Plants {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}
class Flower extends Plants {
  constructor(type, color) {
    super(type, color);
    let waterLevel = 0;
    this.stateCheck = () => {
      if (waterLevel < 5) {
        console.log(`The ${this.color} ${this.type} needs water`);
      } else {
        console.log(`The ${this.color} ${this.type} doesnt need water`);
      }
    };
    this.water = (number) => {
      waterLevel += number * 0.75;
      console.log(`flower has ${waterLevel} water`);
    };
  }
}
class Tree extends Plants {
  constructor(type, color) {
    super(type, color);
    let waterLevel = 0;
    this.stateCheck = () => {
      if (waterLevel < 10) {
        console.log(`The ${this.color} ${this.type} needs water`);
      } else {
        console.log(`The ${this.color} ${this.type} doesnt need water`);
      }
    };
    this.water = (number) => {
      waterLevel += number * 0.4;
      console.log(`tree has ${waterLevel} water`);
    };
  }
}
class Garden {
  constructor() {
    const flowers = [];
    const trees = [];
    let plantsNum = 0;
    this.addflower = (newflower) => { flowers.push(newflower); plantsNum += 1; };
    this.addtree = (newtree) => { trees.push(newtree); plantsNum += 1; };
    this.waterPlants = (amount) => {
      flowers.forEach((element) => {
        element.water(amount / plantsNum);
      });
      trees.forEach((element) => {
        element.water(amount / plantsNum);
      });
    };
    this.checkStatus = () => {
      flowers.forEach((element) => {
        element.stateCheck();
      });
      trees.forEach((element) => {
        element.stateCheck();
      });
    };
    this.getFlowers = () => flowers;
    this.getTrees = () => trees;
  }
}
const yellowFlower = new Flower('flower', 'yellow');
const blueFlower = new Flower('flower', 'blue');
const purpleTree = new Tree('tree', 'purple');
const orangeTree = new Tree('tree', 'orange');

const garden = new Garden();
garden.addflower(yellowFlower);
garden.addflower(blueFlower);
garden.addtree(purpleTree);
garden.addtree(orangeTree);
garden.checkStatus();
garden.waterPlants(90);
garden.checkStatus();
