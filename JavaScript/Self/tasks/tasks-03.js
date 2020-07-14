//=======listeners====

const counter = function (n = 50) {
  let count = n;
  return function (step = 2) {
    count += step;
    return console.log(count);
  };
};
const range1 = counter(50);

const sayHello = () => {
  let result = 50;
  if (result < 100) {
    result = range1(2);
  } else console.log("it is maximum");
};
const buttonClickClass = document.querySelector(".buttonClickClass");
const buttonClickId = document.querySelector("#buttonClickId");
const buttonClickAttribute = document.querySelector(
  '[data-button="buttonClickData"]'
);

// console.log(buttonClickClass);
buttonClickId.addEventListener("click", sayHello);
buttonClickClass.addEventListener("click", sayHello);
buttonClickAttribute.addEventListener("click", sayHello);
// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "Vladilen",
//   age: 25,
//   sayhello: hello,
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Elena",
//   age: 23,
// };

// const fnLenaInfo = person.logInfo.bind(lena, "Frontend", "92838939");
// fnLenaInfo();

// const array = [1, 2, 3, 4, 5];

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(3));

// //=========

// function calculateNum(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }
// const calc = calculateNum(42);
// calc();

// function calcIncrement(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addNum = calcIncrement(2);
// const addTen = calcIncrement(10);
// console.log(addNum(23));
// console.log(addTen(10));
// //=====

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");
// console.log(comUrl("google"));
// console.log(ruUrl("yandex"));
//=================
// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// function logPerson() {
//   console.log(
//     `Person name: ${this.name}, Person age: ${this.age} Person job: ${this.job}`
//   );
// }
// const person1 = { name: "Alex", age: "23", job: "Designer" };
// const person2 = { name: "Mango", age: 21, job: "Backend" };

// bind(person1, logPerson)();

//====
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());

//=====

// const Manager = function (name, sales, salary) {
//   this.name = name;
//   this.sales = sales;
//   this.salary = salary;
// };

// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// const mango = new Manager("Poly", 6, 450);
// console.log(mango);
// mango.sell();
// console.log(mango);

//====================
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// Hero.prototype.changeName = function (name) {
//   this.name = name;
// };

// const mango = new Hero("Mango", "200");
// console.log(mango);
