// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts } from "../data/data";

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let maxBalance = 0;
  let maxBalanceAccounts = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].balance > maxBalance) {
      maxBalance = bankAccounts[i].balance;
      maxBalanceAccounts = [];
      maxBalanceAccounts.push(bankAccounts[i]);
    } else if (bankAccounts[i].balance === maxBalance) {
      maxBalanceAccounts.push(bankAccounts[i]);
    }
  }
  return maxBalanceAccounts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
