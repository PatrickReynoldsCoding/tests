class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  showBalance() {
    return this.balance;
  }

  showTransactions() {
    return this.transactions;
  }

  statement() {
    return (
      "date || credit || debit || balance\n" +
      this.generateStatementBody().join("")
    );
  }

  generateStatementBody() {
    // replace line 26 with the two lines below to give a reverse chronological order for the statement
    //     let chronologicalTransactions = [...this.transactions].reverse();
    //     return chronologicalTransactions.map((transaction) => {
    return this.transactions.map((transaction) => {
      if (transaction.amount > 0) {
        return `${transaction.date} || ${transaction.amount} || || ${transaction.balanceAfterTransaction}\n`;
      } else {
        return `${transaction.date} || || ${transaction.amount * -1} || ${
          transaction.balanceAfterTransaction
        }\n`;
      }
    });
  }

  newTransaction(transaction) {
    transaction.balanceAfterTransaction = transaction.amount + this.balance;
    this.transactions.push(transaction);
    this.balance += transaction.amount;
  }

  // transactionVerification(transaction) { //How would I check if an object matches a certain data type?
  //   transaction.hasOwnProperty('date', 'amount')

  // }
}

module.exports = Account;
