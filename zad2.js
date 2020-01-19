class Dog {
  constructor(
    walkingTime,
    barkingStatus,
    powerStatus,
    waterAmmount,
    foodAmmount
  ) {
    this.walkingTime = walkingTime;
    this.barkingStatus = barkingStatus;
    this.powerStatus = powerStatus;
    this.waterAmmount = waterAmmount;
    this.foodAmmount = foodAmmount;
  }

  turnDogOn() {
    if (this.powerStatus === false) {
      this.powerStatus = true;
      console.log("This dog is crazy mofooo!!!");
      return this.powerStatus;
    }
    console.log("This dog is crazy mofo!!!");
    return this.powerStatus;
  }

  turnDogOff() {
    if (this.powerStatus === true) {
      this.powerStatus = false;
      console.log("I was robbed again! Thank you doggo!!!");
      return this.powerStatus;
    }
    console.log("Yo, man, your sleeping schedule is bomb!!!");
    return this.powerStatus;
  }

  timeForWalk() {
    if (
      (this.walkingTime >= 8 && this.walkingTime <= 10) ||
      (this.walkingTime >= 18 && this.walkingTime <= 21)
    ) {
      console.log("Jesus, you run like Usain Bolt!!!");
    } else {
      console.log("Still not the time.");
    }
  }

  timeForBarking() {
    if (this.powerStatus === true && this.barkingStatus === true) {
      console.log("Boi, you sound like werewolf!");
    } else {
      console.log("What a quiet dog!");
    }
  }
  doggoThirsty(water) {
    let newWaterAmmount = this.waterAmmount + water;
    if (
      (this.waterAmmount >= 10 || this.waterAmmount < 10) &&
      newWaterAmmount >= 10
    ) {
      console.log("My doggo drinks only water cuz gains!!!");
      return "My doggo drinks only water cuz gains!!!";
    } else if (this.waterAmmount < 10 && newWaterAmmount < 10) {
      console.log("Yo, Filip, I am thristy!");
      return "Yo, Filip, I am thristy!";
    }
  }

  doggoHungry(food) {
    let newFoodAmmount = this.foodAmmount + food;
    if (
      (this.foodAmmount >= 10 || this.foodAmmount < 10) &&
      newFoodAmmount >= 10
    ) {
      console.log("My doggo eats only protein cuz gains!!!");
      return "My doggo eats only protein cuz gains!!!";
    } else if (this.foodAmmount < 10 && newFoodAmmount < 10) {
      console.log("Yo, Filip, I am hungry!");
      return "Yo, Filip, I am hungry!";
    }
  }
}

module.exports = Dog;
