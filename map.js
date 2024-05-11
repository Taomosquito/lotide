// First function required for the testing function to work.
const eqArrays = function(arrA, arrB) {
  let test = true;
  if (arrA.length !== arrB.length) {
    test = false;
  } else {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) {
        test = false;
        break;
      }
    }
  }
  return test;
};

// Required Testing Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Sample Array
const words = ["ground", "control", "to", "major", "tom"];

// Function that is the entire purpose of this file.
// This is designed to map the change listed as the callback to every element in the array without changing there index.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

// Calling step to sample usage.
const results1 = map(words, (word) => word[0]);
console.log(results1);

// Testing of the function this file was created for.
// Testing the map function using the required testing function.
assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't']);