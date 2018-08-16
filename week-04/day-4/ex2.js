// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference
function CreateRect(length, width) {
  this.length = length;
  this.width = width;
  this.getArea = () => this.length * this.width;
  this.getCircumference = () => (this.length + this.width) * 2;
}
const rect1 = new CreateRect(4, 5);
console.log(rect1.getArea());
console.log(rect1.getCircumference());
