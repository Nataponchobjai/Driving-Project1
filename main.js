const assert  = require("assert");


class Car {
   
// this construct is code that is excuted when a new instance of the class is created/instantiated
    constructor(id, capacity,mpg){
        this.id = id;
        this.capacity = capacity;
        this.mpg = mpg;
        this.odometer = 0;
        this.fuel = 0;
    }

    // HW. update the addFuel, so that you cannot "over fuel" the car
    addFuel = function(gallons) {
        
        if (this.fuel + gallons <= this.capacity && gallons >= 0) {
            this.fuel = this.fuel + gallons;
        } else if (gallons < 0) {
            
            console.log("Invalid input");
        } else {
            console.log("Tank is full");
        }
    }

// HW update the drive(), so only the appropriate miles are driven,
drive = function(miles) {
    
    if (miles <= this.fuel * this.mpg && miles >= 0) {
        this.odometer = this.odometer + miles;
        this.fuel = this.fuel - miles / this.mpg;
    } else if (miles < 0) {
       
        console.log("Invalid input");
    } else {
        console.log("Out of fuel");
    }
}
}
module.exports = Car;


if(typeof describe === 'function'){

    describe("Car", function(){
      it("creates a car with an id, mpg, tank capacity, odometer at 0, and fuel at 0",function(){
        let newCar = new Car("vin",5,10);
        assert.equal(newCar.id,"vin")
        assert.equal(newCar.mpg, 5);
        assert.equal(newCar.capacity,10);
        assert.equal(newCar.odometer,0);
        assert.equal(newCar.fuel,0);
      })
    })
  
    describe("methods drive and addFuel", function (){
      it("does NOT drive without putting fuel in", function(){
        let newCar = new Car("vin",5,10);
        newCar.drive(2);
        assert.equal(newCar.odometer, 4)
        newCar.addFuel(1)
        newCar.drive(2);
        assert.equal(newCar.odometer,2)
    })
  
    it("drives after adding fuel", function(){
      let newCar = new Car("vin",20,10);
      newCar.addFuel(5);
      assert.equal(newCar.fuel, 5);
      newCar.drive(80); 
      assert.equal(newCar.fuel,1) 
    
    })
  
    it("does NOT drive after I am out of fuel", function(){
      let newCar = new Car("vin", 20, 10) ;
      newCar.addFuel(5);
      newCar.drive(80);
      assert.equal(newCar.fuel,1);
      newCar.drive(40);
      assert.equal(newCar.odometer,100)
      assert.equal(newCar.fuel,0)
      console.log(newCar.drive(40))
  
    })
  
    it("does NOT let me put more fuel than the capacity", function() {
      let newCar = new Car("vin",20,10)
      newCar.addFuel(11);
      assert.equal(newCar.fuel, 10)
      console.log(newCar.addFuel(11))
    })
  });
  }