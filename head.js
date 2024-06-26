// borrows a function from another file which later can be done using more streamlined means.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// returns the first element in an array.
const head = function(arr) {
  return arr[0];
};
assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([7,7,7]), 5);
