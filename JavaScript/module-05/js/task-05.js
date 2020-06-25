class Car {
  static getSpecs(car) {
    console.log(
      `Max speed: ${car.maxSpeed}, speed:${car.speed}, isOn:${car.isOn}, distance: ${car.distance}, price:${car.price}`
    );
  }
  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0,
  }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value + this.speed <= this.maxSpeed) {
      this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed >= value) {
      this.speed -= value;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
console.log(mustang);

mustang.accelerate(50);
console.log(mustang);

mustang.drive(2);
console.log(mustang);

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
console.log(mustang);
mustang.drive(1);
console.log(mustang);
mustang.turnOff();
console.log(mustang);

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
