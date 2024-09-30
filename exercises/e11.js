// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...
  let total = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i].withdrawals;
    let sum = 0;
    if (num && num.length > 0) {
      for (let x = 0; x < num.length; x++) {
        sum += num[x];
      }
    } else {
      sum = 0;
    }

    total.push(sum);
  }
  return total;

  // let withdrawalsSum = 0;
  // let newArr = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].withdrawls) {
  //     for (let w = 0; w < array.length; w++) {
  //       withdrawalsSum += array[w].withdrawls[w];
  //       newArr.push(withdrawalsSum);
  //     }
  //   }
  // }
  // return newArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
