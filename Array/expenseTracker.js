const Account = {
  name: "Shreyas",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },

  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },

  getAccountSummary: function () {
    let total = 0;
    let totalIncome = 0;
    let AccountBal = 0;

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    this.expenses.forEach(function (expense) {
      total = total + expense.amount;
    });

    AccountBal = totalIncome - total;

    return `${this.name} has a balance of $${AccountBal}. $${totalIncome} is in income. $${total} is in Expense`;
  },
};

Account.addExpense("Rent", 9500);
Account.addExpense("Party", 500);
Account.addIncome("Profit", 1000000);
console.log(Account.getAccountSummary());
