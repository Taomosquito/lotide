// Established a testing array so that I can show it remains unchanged
let testingArrayA = [1,2,3];
let testingArrayB = [1,2];

// A function checking if two arrays are equal for testing purposes.
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

// A function providing an assertion message success or passed for the above.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Newly formed function that removes anything making arays unequal in the new value it returns.
const without = function(source, itemsToRemove){
  let result = Array.from(source);
  for(let i = 0; i < source.length; i++){
    if(itemsToRemove.includes(source[i])){
    } else {
      result.splice(i, 1);
    }
  }
  console.log(result);
  return result;
};

// Testing Conditions
assertArraysEqual([1,2,3],[1,2,3]);
without(["1","2","3"],["1","2","3"]);
assertArraysEqual(["1","2","3"],["1","2","3"]);
without(["1","2","3"],["1","2",3]);
assertArraysEqual(["1","2","3"],["1","2",3]);
assertArraysEqual(["1","2","3"],["1","2"]);
without(["1","2","3"],["1","2"]);
without(testingArrayA, testingArrayB);
console.log(testingArrayA);
console.log(testingArrayB);
assertArraysEqual(without(["1","2","3"],["1","2","3"]), [])
