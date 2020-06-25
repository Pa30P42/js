// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.showStats = function (hero) {
//   console.log("Logging stats from Hero.Showstats: ", hero);
// };

// Hero.prototype.changeName = function (name) {
//   this.name = name;
// };

// const mango = new Hero("Mango", "200");
// console.log(mango);

// Hero.showStats(mango);
////==================

// class Hero {
//   static description = "Here is Hero base ";

//   static showStats(hero) {
//     console.log("Logging stats from hero.showStats:", hero);
//   }

//   constructor(name, xp) {
//     this._name = name;
//     this.xp = xp;
//   }

//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     this._name = newName;
//   }

//   //   changeName(name) {
//   //     this.name = name;
//   //   }

//   gainXp(amount) {
//     console.log(`${this.name} gained ${amount} xp`);
//     this.xp += amount;
//   }

//   //   getName() {
//   //     return this.name;
//   //   }
// }

// console.dir(Hero);
// const mango = new Hero("Mango", 2000);
// console.log(mango);
// mango.gainXp(2000);
// console.log(mango);

// // console.log(mango.getName());
// console.log(mango.name);
// mango.name = "Mangolazavrik";
// console.log(mango.name);

//====

class Hero {
  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} xp`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}

class Paladdin extends Warrior {
  constructor(name, xp, weapon, spells) {
    super(name, xp, weapon);
    this.spells = spells;
  }
  cast() {
    console.log(`${this.name} casts ${this.spells}`);
  }
}

const mango = new Paladdin("Mango", 1000, "Alibarda", "avada kedavra");
console.log(mango);
mango.attack();
mango.gainXp(2000);
console.log(mango);
mango.cast();
console.log(mango.name);
