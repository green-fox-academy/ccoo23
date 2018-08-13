'use strict';
// 1st
// Call the ride method of the volvo, with 42 as a parameter

const volvo = {
  type: "Volvo",
  fuel: 23,
  consumption: 0.06,
  kms: 43000,
  ride: function ride(km) {
    this.kms += km;
    this.fuel -= km * this.consumption;
  },
};
volvo.ride(42);
console.log(volvo);
// 2nd
// Call the refuel function on the ferrari object using the bind method, with
// 52 as a parameter

const ferrari = {
  type: 'Ferrari',
  fuel: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function ride(km) {
    this.kms += km;
    this.fuel -= km * this.consumption;
  },
};

function refuel(liters) {
  this.fuel += liters;
}

refuel.bind(ferrari)(52);
console.log(ferrari);

// 3rd
// Create a tesla object that has 3 properties
//  - type: string
//  - battery: number
//  - kms: number
//  - consunption: number
// And a method called ride, that takes a parameter celled km,
// and increments kms with it, then drains the battery based on the consumpltion 
const tesla = {
  type: 'tesla',
  battery: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function ride(km) {
    this.kms += km;
    this.battery -= km * this.consumption;
  },
};

tesla.ride(36);
console.log(tesla.kms);
console.log(tesla.battery);