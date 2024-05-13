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
const TestingCallback = (x) => x.stars === 1


// Example Usage:
console.log(findKey(object1, TestingCallback));