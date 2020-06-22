const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

let typeResult = 0;
let depositSum = 0;
let withdrawSum = 0;

let id = 0;

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    id += 1;

    const transaction = {
      id: id,
      type: type,
      amount: amount,
    };
    console.table(transaction);
    this.transactions.push(transaction);
    if (type === Transaction.DEPOSIT) {
      this.balance += amount;
    } else {
      this.balance -= amount;
    }
    return transaction;
  },

  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
  },
  withdraw(amount) {
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  getBalance() {
    console.log(this.balance);
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transact of this.transactions) {
      if (transact.id === id) {
        console.log(transact);
        return transact;
      }
    }
  },

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

// account.createTransaction(400, "deposit");
// account.createTransaction(100, "deposit");
// account.createTransaction(200, "deposit");
// account.createTransaction(600, "withdraw");
// account.createTransaction(200, "withdraw");

// account.deposit();
// account.withdraw();
// console.log(account.getBalance());

// console.log(account.getTransactionTotal("deposit"));

// console.table(account.transactions);

account.deposit(300);
account.deposit(800);
account.deposit(400);
account.deposit(1200);
account.withdraw(200);
account.withdraw(700);
account.withdraw(700);

account.getBalance();

account.getTransactionDetails(1);
account.getTransactionDetails(3);

account.getTransactionTotal("deposit");
// account.getTransactionTotal("withdraw");
