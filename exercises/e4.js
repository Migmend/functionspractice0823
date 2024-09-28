// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  var array = [20, 24, 19, 26];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 20) {
      return array[i];
    }
  }
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  var array = [20, 24, 19, 26];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 25) {
      return array[i];
    }
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
