let myAccount = {
  name: "Andrew Mead",
  expenses: 0,
  income: 0,
};

let addExpense = function (Account, Amount) {
  Account.expenses = Account.expenses + Amount;
};
//Add Income
let addIncome = function (Account, Income) {
  Account.income = Account.income + Income;
};

//Reset Account
let resetAcc = function (Account) {
  Account.expenses = 0;
  Account.income = 0;
};
//getAccountSummary
let getAccountSummary = function (Account) {
  console.log(
    `Account for ${myAccount.name} has ${
      myAccount.income - myAccount.expenses
    }. Income is ${myAccount.income}. Expense is ${myAccount.expenses}`
  );
};

addIncome(myAccount, 2000);
addExpense(myAccount, 500);
getAccountSummary(myAccount);
resetAcc(myAccount);
getAccountSummary(myAccount);
