const assert = require("chai").assert;
/** Import simple App class */
const Dog = require("./../zad2");

let walkingTime = 9;
let barkingStatus = true;
let powerStatus = false;
let waterAmmount = 8.4;
let foodAmmount = 9.5;

let dog = new Dog(
  walkingTime,
  barkingStatus,
  powerStatus,
  waterAmmount,
  foodAmmount
);

describe("Doggo unit test", function() {
  describe("Test za ispitivanje korisnosti mog psa", function() {
    it("Checking if powerStatus and barkingStatus are boolean", function() {
      assert.isBoolean(powerStatus);
      assert.isBoolean(barkingStatus);
    });
    it("Enough sleeping, my doggo", function() {
      assert.equal(dog.turnDogOn(), true);
    });
    it("Doggo is already awake", function() {
      let doggo = new Dog(5, true, true, 12, 10);
      assert.equal(doggo.turnDogOn(), true);
    });
    it("Time for bed, my doggo", function() {
      let doggo = new Dog(5, true, true, 12, 10);
      assert.equal(doggo.turnDogOff(), false);
    });
    it("Doggo is already sleeping", function() {
      let doggo = new Dog(5, true, false, 12, 10);
      assert.equal(doggo.turnDogOff(), false);
    });
    it("Doggo goes for a walk", function() {
      dog.timeForWalk();
    });
    it("Doggo goes for a walk again", function() {
      let doggo = new Dog(19, true, false, 12, 10);
      doggo.timeForWalk();
    });
    it("Sorry doggo, it's not time for chasing a ball", function() {
      let doggo = new Dog(15, true, false, 12, 10);
      doggo.timeForWalk();
    });
    it("The loudest doggo in the world", function() {
      dog.timeForBarking();
    });
    it("The quietest doggo in the world", function() {
      let doggo = new Dog(15, true, false, 12, 10);
      doggo.timeForBarking();
    });
    it("Does doggo have enough water?", function() {
      assert.equal(
        dog.doggoThirsty(6),
        "My doggo drinks only water cuz gains!!!"
      );
    });
    it("Oops, doggo has no water", function() {
      let doggo = new Dog(5, true, true, 3, 10);
      assert.equal(doggo.doggoThirsty(6.2), "Yo, Filip, I am thristy!");
    });
    it("Does doggo have enough food?", function() {
      assert.equal(
        dog.doggoHungry(3.4),
        "My doggo eats only protein cuz gains!!!"
      );
    });
    it("Oops, doggo has no food", function() {
      let doggo = new Dog(5, true, true, 3, 3.4);
      assert.equal(doggo.doggoHungry(6), "Yo, Filip, I am hungry!");
    });
  });
});
