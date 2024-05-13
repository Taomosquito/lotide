// testing functionality for later use.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// function to search through objects that was greatly required.
const findKey = function(object, callback) {
  let keys = Object.keys(object)
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const object1 =
{
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
};

// // Testing Callback Functions.
const TestingCallback1 = (x) => x.stars === 1
const TestingCallback2 = (x) => x.stars === 2
const TestingCallback3 = (x) => x.stars === 3

// Example Usage:
assertEqual(findKey(object1, TestingCallback1), "Blue Hill");
assertEqual(findKey(object1, TestingCallback2), "noma");
assertEqual(findKey(object1, TestingCallback3), "Akaleri");