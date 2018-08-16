// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says
function Animals(language) {
  this.language = language;
  this.say = () => {
    console.log(`it says ${this.language}`);
  };
}
const dog = new Animals('WOOF');
dog.say();
