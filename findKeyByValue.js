// testing functionality for later use.
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// function to search through objects that was greatly required.
const findKeyByValue = function (object, value) {
  let keys = Object.keys(object)
  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === value) {
      return keys[i];
    }
  }
  return undefined;
};
//setup information for testing.
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

//testing.
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);