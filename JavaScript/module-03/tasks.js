// const user1 = ["Alex", 23, "Studemt", "bc22"];

// const users [
//     {
//         id:"kdchkshdkchdskh"
//         userName: "Alex",
//         age: "23",
//         status: "studemt",
//         course: "bc22"
// }

//     {
//         id:"kdchkshdkchdskh"
//         userName: "SHmaleks",
//         age: "23",
//         status: "studemt",
//         course: "bc22"
// }
// ]

// const students = ["Alex", "kiwi", "manggo"];

// console.log(students);

// students[0] = "alexand";
// console.log(students);

// ==== for=====

// const students = ["Alex", "kiwi", "manggo"];

// console.log(students);

// for (let i = 0; i < students.length; i += 1) {
//   console.log(students[i]);
// }

//======for ....of =====

// const students = ["Alex", "kiwi", "manggo"];

// for (const student of students) {
//   console.log(student);
// }

//===ex2

// const students = ["Alex", "kiwi", "manggo"];

// const result = [];

// for (student of students) {
//   result.push(student);
// }
// console.log(result);

// students.forEach(student => console.log(studemt));

// ====[]====

// const fields = [
//   [{ name: "field1" }, { name: "field2" }, { name: "field3" }],
//   [{ name: "field4" }, { name: "field5" }, { name: "field6" }],
//   [{ name: "field7" }, { name: "field8" }, { name: "field9" }],
// ];

// let x1 = fields[1][2];

// console.log(x1);

//====indexOf

// const users = ["alex", " boris", "nikita", "borya"];

// const result = [];

// for (const user of users) {
//   const modifiedUser = [users.indexOf(user), user];
//   result.push(modifiedUser);
// }

//second choise
// for (let i = 0; i < users.length; i += 1) {
//   const modifiedUser = [i, users[i]];
//   result.push(modifiedUser);
// }

// console.log(result);

//===== functions

// const add = function (a, b, c) {
//   return a + b + c;
// };

// const result = add(1, 2, 3);
// console.log(result);

// console.log(add(2, 3, 6));

//////
// let total = 0;
// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`Посчитай с ${countFrom} до ${countTo} прибавляя ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(6);

/////

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 12, 123, 211));
/////////
// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("enter  sum more than zero");
//   } else if (amount > balance) {
//     console.log("not enough cash on your balance");
//   } else {
//     console.log("operation succesfullm goo bye");
//   }
// };

// withdraw(300, 400);

////////

// const add = function (a, b) {
//   console.log("a:", a);
//   console.log("b:", b);

//   const result = a + b;

//   return result;
// };

// const r1 = add(2, 8);

// console.log(r1);

// const r2 = add(123, 129);
// console.log(r2);
////======

// const friends = ["alex", "kiwi", "semender", "alishka"];

// const numbers = [2, 4, 5, 6, 8];

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);

////

// const friends = ["ali", "vali", "shaftali"];
// const nameToFind = "vali";

// let message = "no such friend";

// for (const friend of friends) {
//   if (nameToFind === friend) {
//     message = "you have such friend";
//     break;
//   }
// }

// console.log(message);

// const friends = ["ali", "vali", "shaftali"];
// const nameToFind = "vali";

// const findFriends = function (ourFriends, friendsName) {
//   console.log(`friend: ${ourFriends}`);
//   console.log(`founded: ${friendsName}`);

//   for (const friend of ourFriends) {
//     if (friendsName === friend) {
//       return "bicbala burdadi brat";
//     }
//   }

//   return "qaqa yoxdu";
// };

// const r1 = findFriends(friends, "ali");
// console.log(r1);
// massivi funkcii
// const slugify = function (string) {
//   const words = string.toLowerCase().split(" ");

//   const slug = words.join("-");

//   return slug;
// };

// slugify("sahdakj ahdkjas ahkasha aKJHADS ADKSJ hjaks");

// const articles = [
//   "askldasjdaklsjdlas  asdhas haskdashk",
//   "asjh ashkjasdkashdaskj  hasj ja a s",
//   "ajsdhasj ahkjs snhjas akj dsa bnja",
//   "adhkj akskjks sksdjdipqia nasj",
// ];

// const slugs = [];

// for (const article of articles) {
//   const slug = slugify(article);

//   slugs.push(slug);
// }

// console.log(slugs);

// smallestNumber

// const numbers = [23, 12, 312, 2, 42, 21, 1, 123, -1, 23];

// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

// console.log(smallestNumber);

// with function

// const numbers = [232, 23, 21, 534, 54, 3, 2, 1, 42];

// const findSmalletNumber = function (items) {
//   let smallestNumber = items[0];

//   for (let i = 0; i < items.length; i += 1) {
//     if (items[i] < smallestNumber) {
//       smallestNumber = items[i];
//     }
//   }
//   return smallestNumber;
// };

// // const r1 = findSmalletNumber(numbers);
// console.log(findSmalletNumber([12, 31, 23, 1, 23, 12, 2, 2, 0, 2, 123]));

//  function isInFriend ternar operator

// const friends = ["semender", "elekber", "eliaga", "moshu"];

// const isInFriend = function (friendsList, name) {
//   const isInFriend = friendsList.includes(name);
//   //   if (friendsList.includes(name)) {
//   //     return "in your friendlist";
//   //   } else {
//   //     return "no such friend in list";
//   //   }

//   return isInFriend ? "we found your friend" : "no such friend";
// };

// const r1 = isInFriend(friends, "elekber");
// console.log(r1);

// const r2 = isInFriend(friends, "sebish");

// console.log(r2);

// function cardToRemove

// const cards = ["card-01", "card-02", "card-03", "card-04"];

// const removeCard = function (allCards, cardToRemove) {
//   allCards.push(":)");
// };

// removeCard(cards);

// console.log(cards);

// const cards = ["card-01", "card-02", "card-03", "card-04"];

// const removeCard = function (allCards, cardToRemove) {
//   const index = allCards.indexOf(cardToRemove);
//   allCards.splice(index, 1);
// };

// removeCard(cards, "card-02");

// console.log(cards);

// const cards = ["card-01", "card-02", "card-03", "card-04"];

// const addToCards = function (allCards, cardToInsert, index) {
//   allCards.splice(index, 0, cardToInsert);
// };

// addToCards(cards, "card-21", 2);
// console.log(cards);

// preudoargument

// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (let arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(2, 3, 4, 1, 2, 2));

// const posts = ["post-01", "post-02", "post-03", "post-04"];
// const tag = "#jqueryrukkes";

// const addTag = function (tag, ...args) {
//   const cardsWithTag = [];

//   for (let arg of args) {
//     cardsWithTag.push(`${arg}${tag}`);
//   }

//   return cardsWithTag;
// };

// console.log(addTag("#jqeurt", "asd", "asd"));
// console.log(addTag("#miami", "aasssd", "ss"));

// const getResult = (String) => {
//   if ()
// }

// ========= module 3

// const hotel = {
//   name: "Kadikale resort",
//   stars: 5,
//   capacity: 200,
//   updateName: function (newName) {
//     this.name = newName;
//     this.someMethod();
//   },
//   someMethod() {
//     console.log("semender dayi");
//   },
// };

// hotel.updateName("Hillton");

// console.log(hotel.name);

// const feeds = {
//   good: 12,
//   bad: 122,
//   awesome: 121221,
// };

// // console.log("awesome" in feeds);

// // for (const key in feeds) {
// //   console.log(key);
// //   console.log(feeds[key]);
// // }

// const keys = Object.keys(feeds);

// console.log(keys);

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     product.quantity = 1;
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];

//       if (item.name === productName) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;

//     for (let item of this.items) {
//       total += item.price * item.quantity;
//     }
//     return total;
//   },

//   increaseItem(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },

//   decreaseItem(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity - 1 === 0) {
//           this.remove(productName);
//         }
//         item.quantity -= 1;
//       }
//     }
//   },
// };

// cart.add({ name: "apple", price: "12" });
// cart.add({ name: "lemon", price: "8" });
// cart.add({ name: "cherry", price: "25" });
// cart.add({ name: "cherry", price: "25" });
// cart.add({ name: "cherry", price: "25" });
// cart.add({ name: "lemon", price: "8" });
// cart.add({ name: "lemon", price: "8" });
// cart.increaseItem("lemon");
// cart.increaseItem("lemon");
// cart.decreaseItem("lemon");
// cart.decreaseItem("lemon");
// cart.decreaseItem("lemon");
// cart.decreaseItem("lemon");
// cart.decreaseItem("lemon");

// console.table(cart.getItems());

// console.log(cart.countTotalPrice());

// const cars = {
//   color: "red",
//   material: "metal",
// };

// let transactions = [
//   {
//     color: "red",
//     material: "metal",
//   },
//   {
//     color: "orange",
//     material: "plastic",
//   },
//   {
//     color: "white",
//     material: "wood",
//   },
// ];

// console.table(transactions);

// console.log(transactions[1].material);

// const hotel = {
//   name: "Kadikale resort",
//   star: 5,
//   place: "antaliya",
// };

// const { name, star, place } = hotel;

// console.log(name);

// console.log(place);

// const handleFetchSuccess = function (data) {
//   console.log(data);
// };

// console.log("before fetch");

// fetch("https://swapi.co/api/people/1/")
//   .then((res) => res.json())
//   .then(handleFetchSuccess);

// console.log("after fetch");
// console.log("before time-out");

// setTimeout(function () {
//   console.log("in three seconds");
// }, 3000);
// console.log("after");

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labeld = [];

// repeat(5, (value) => {
//   labeld.push(`label ${value + 1}`);
// });

// console.log(labeld);
// let result = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < result.length; i += 1) {
//   if (i % 2 === 1) {
//     console.log(result[i]);
//   }
// }
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,
  id: 0,
  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.id += 1;

    return {
      id: this.id,
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("not enough cash on your balance");
    } else {
      this.balance -= amount;

      const newTransaction = this.createTransaction(
        amount,
        Transaction.WITHDRAW
      );

      this.transactions.push(newTransaction);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    // for (let i = 0; i < this.transactions.length; i += 1) {
    //   if (this.transactions[i].id === id) {
    //     return this.transactions[i];
    //   }
    // }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};

// console.log(account.createTransaction(100, Transaction.DEPOSIT));
account.deposit(200);
account.deposit(300);
account.deposit(500);

account.withdraw(250);
account.withdraw(150);
account.withdraw(50);
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionTotal("deposit"));

console.log(account);
