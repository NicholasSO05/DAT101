
"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const AccountTypes = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kredittkonto",
  Pensjon: "Pensjonskonto",
};

// This regards part 5! You can find this on gitHub.
const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "European euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indisk rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TBankAccount {
  #type = 0;
  #balance = 0;
  #withdrawCount = 0;
  #currency = null;

  constructor(aType) {
    this.#type = aType;
    this.#currency = CurrencyTypes.NOK;
  }

  #currencyConvert(aType){
    return CurrencyTypes.NOK.value / this.#currency.value * aType.value;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    this.#withdrawCount = 0;
    let txtOut = "The account type has change from " + this.toString();
    this.#type = aType;
    txtOut += " to " + this.toString();
    printOut(txtOut);
  }

  getBalance() {
    return this.#balance.toFixed(2);
  }

  deposit(aAmount, aCurrencyType = CurrencyTypes.NOK) {
    this.#withdrawCount = 0;
    const exchange = this.#currencyConvert(aCurrencyType);
    const newAmount = aAmount / exchange;
    this.#balance += newAmount;
    const den = this.#currency.denomination;
    const name = aCurrencyType.name;
    printOut("Deposit of " + aAmount + " " + name + ", new balance is " + this.#balance.toFixed(2) + den);
  }

  withdraw(aAmount, aCurrencyType = CurrencyTypes.NOK) {
    switch (this.#type) {
      case AccountTypes.Pensjon:
        printOut("You can not withdraw from " + this.#type);
        return;
      case AccountTypes.Saving:
        this.#withdrawCount++;
        if(this.#withdrawCount > 3){
          printOut("You can not withdraw from " + this.#type + " more than three times");
          return;
        }
        break;
    }
    const exchange = this.#currencyConvert(aCurrencyType);
    const newAmount = aAmount / exchange;
    this.#balance -= newAmount;
    const den = this.#currency.denomination;
    const name = aCurrencyType.name;
    printOut("Withdraw of " + aAmount + " " + name + ", new balance is " + this.#balance.toFixed(2) + den);
  }

  setCurrencyType(aType){
    if(this.#currency === aType){
      return;
    }
    printOut("The currency has changed from " + this.#currency.name + " to " + aType.name);
    const exchange = this.#currencyConvert(aType);
    this.#currency = aType;
    this.#balance *= exchange;
    printOut("New balance is " + this.#balance.toFixed(2) + this.#currency.denomination);
  }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Print all these types on a single comma-separated line:
// Get all object values:
const accountTypeValues = Object.values(AccountTypes);
// Join them in a single string with commas:
const part1Text = accountTypeValues.join(", ");
// Print the result:
printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Let the constructor of the class have a parameter for the account type of this bank account class. And set
// "type" to this parameter value. The "toString" method should return the account type. The "setType"
// method should set "type" to this new value and print out the change of account type.
// Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
// type. Then change the account type to "Saving".
const myAccount = new TBankAccount(AccountTypes.Normal);
myAccount.setType(AccountTypes.Saving);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// "getBalance" should return the account balance. "deposit" should increase the balance by a given amount
// and print the amount and the new balance. "withdraw" should decrease the balance by a given amount
// and print the amount and the new balance.
myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
// savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
// the account type is changed or the deposit method is used. If the account type is a pension account, no
// withdrawals are allowed.
// Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
// "setType" if necessary.
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountTypes.Pensjon);
myAccount.withdraw(30);
myAccount.setType(AccountTypes.Normal);
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Add a private currency type to the account class and set the default value to "NOK".
// Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries
// to switch to a new currency of the same type as the account already has, the method should do nothing
// and just return. The new structure will be like this:
myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Expand the account class with a private method that converts from one currency to another. Use this
// method to change the balance when the currency changes. Replace all places where you print the balance
// so that it has exactly 2 decimals.
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no
// currency type is specified (undefined), use NOK as the default. Make this change so that the functions
// print out the currency the amount is in.
// Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of
// the balance with a different currency than the account is in. You should have a balance of exactly 0.00.
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.1585, CurrencyTypes.SEK);
printOut(newLine);
