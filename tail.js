//Borrowed from assertEqual.js and a better means of accessing it will be available later.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// This function drops off the first element of the array than sends back a new array in its place.
const tail = function(arr) {
  let arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
};

let sampleArray = [1,2,3,4,5];
console.log(tail([1]));
console.log(tail([]));
console.log(tail([1,2,3,4,5]));
console.assert(tail(sampleArray).length === sampleArray.length - 1);
console.log(tail(sampleArray));
console.log(sampleArray);
assertEqual(tail(sampleArray)[0], sampleArray[1]);