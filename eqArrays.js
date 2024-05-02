//Borrowed from assertEqual.js and a better means of accessing it will be available later.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrA, arrB) {
  let test = true;
  if (arrA.length !== arrB.length) {
    test = false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      test = false;
      break;
    }
  }
  return test;
};
let fArr1 = [1,2,3,4,5,6];
let fArr2 = [6,5,4,3,2,1];

assertEqual(eqArrays([1],[]), false);
assertEqual(eqArrays([1,2],[1]), false);
assertEqual(eqArrays([1],[1]), true);
assertEqual(eqArrays([1],[2]), false);
assertEqual(eqArrays([],[1]), false);
assertEqual(eqArrays([1],[1,2]), false);
assertEqual(eqArrays([1],[2]), false);
assertEqual(eqArrays(fArr1, fArr2), false);
assertEqual(eqArrays(fArr1, fArr2.reverse()), true);
assertEqual(eqArrays([1,2,3],[1,2,3]), true);
