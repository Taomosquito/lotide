// ported over test function for boolean.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// ported over test function for arrays.
const eqArrays = function (arrA, arrB) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    if (Array.isArray(object1[keys1[i]]) && Array.isArray(object2[keys1[i]])) {
      if (!eqArrays(object1[keys1[i]], object2[keys1[i]])) {
        return false;
      }
    } else if (object1[keys1[i]] !== object2[keys1[i]]) {
      return false;
    }
  }
  return true;
};



// testing prep.
const shirtObject1 = { color: "Turqoise", size: "XXL" };
const shirtObject2 = { size: "XXL", color: "Turqoise" };
const shirtObject3 = { size: "XXL", color: "Turqoise", sleeveLength: "lengthy" };
const shirtObject4 = { size: "XXL", colors: ["Turqoise", "blue"] };
const shirtObject5 = { colors: ["Turqoise", "blue"], size: "XXL" };

// actually testing.
console.log(eqObjects(shirtObject1, shirtObject2));
assertEqual(eqObjects(shirtObject1, shirtObject3), false); // => false
assertEqual(eqObjects(shirtObject1, shirtObject2), true); // => true
assertEqual(eqObjects(shirtObject1, shirtObject4), false); // => true
assertEqual(eqObjects(shirtObject1, shirtObject5), false); // => true