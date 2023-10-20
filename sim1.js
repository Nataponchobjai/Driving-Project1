let Car = require("./main")

console.log(Car);

let c1 = new Car(1, 10, 40);

c1.addFuel(10);
c1.drive(10);
console.log(c1);
