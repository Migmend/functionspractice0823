// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const wrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    let sumDepos = 0;
    if (array[i].deposits) {
      for (let x = 0; x < array[i].deposits.length; x++) {
        sumDepos += array[i].deposits[x];
      }
    }
    let sumWithdrawals = 0;
    if (array[i].withdrawals) {
      for (let x = 0; x < array[i].withdrawals.length; x++) {
        sumWithdrawals += array[i].withdrawals[x];
      }
    }
    let trueBalance = sumDepos - sumWithdrawals;

    if (array[i].balance != trueBalance) {
      wrongBalance.push(array[i]);
    }
  }

  // for (let i = 0; i < array.length; i++) {

  // }

  // let sumWithdrawals = 0;

  // for (let i = 0; i < array.length; i++) {

  // }

  // for (let i = 0; i < array.length; i++) {

  // }

  return wrongBalance;

  // for (let i = 0; i < array.length; i++) {
  //   let sumDeposits = 0;
  //   if (array[i].deposits) {
  //     sumDeposits += array[i].deposits;
  //     return sumDeposits;
  //   }
  // }

  // for (let i = 0; i < array.length; i++) {
  //   let sumWithdrawals = 0;
  //   if (bankAccounts[i].withdrawals && bankAccounts[i].withdrawals.length) {
  //     sumWithdrawals += bankAccounts[i].withdrawals;
  //     return sumWithdrawals;
  //   }
  // }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
