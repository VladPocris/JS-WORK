class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(am) {
    if(am <= 0 || !am) return `Deposit amount must be greater than zero.`;

    this.transactions.push({type: "deposit", amount: am});
    this.balance += am;

    return `Successfully deposited $${am}. New balance: $${this.balance}`;
  }

  withdraw(am) {
    if(am <= 0 || this.balance < am || !am) return `Insufficient balance or invalid amount.`;

    this.transactions.push({type: `withdraw`, amount: am});
    this.balance -= am;

    return `Successfully withdrew $${am}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let str = "Deposits: ";
    const deposits = this.transactions.filter((transaction) => transaction.type === `deposit`);
    const lastIndex = deposits.length - 1;

    deposits.forEach((deposit, index) => {
      if(index != lastIndex) {
        str += `${deposit.amount},`;
      } else {
        str += `${deposit.amount}`;
      }
    })

    return str;
  }

  listAllWithdrawals() {
    let str = "Withdrawals: ";
    const withdrawals = this.transactions.filter((transaction) => transaction.type === `withdraw`);
    const lastIndex = withdrawals.length - 1;

    withdrawals.forEach((withdrawal, index) => {
      if(index != lastIndex) {
        str += `${withdrawal.amount},`;
      } else {
        str += `${withdrawal.amount}`;
      }
    })

    return str;
  }

}

const myAccount = new BankAccount();
console.log(myAccount.deposit(1));
console.log(myAccount.deposit(15));
console.log(myAccount.withdraw(10));
console.log(myAccount.deposit(100));
console.log(myAccount.deposit(4));
console.log(myAccount.withdraw(5));
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
console.log(myAccount.checkBalance());